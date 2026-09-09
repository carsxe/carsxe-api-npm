jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import fetch from 'node-fetch';
import CarsXE from '../index';

const mockedFetch = fetch as unknown as jest.Mock;

function jsonResponse(body: unknown = { success: true }) {
  return Promise.resolve({
    json: () => Promise.resolve(body),
    text: () => Promise.resolve('vin,hasRecalls\n'),
  });
}

describe('CarsXE new endpoints', () => {
  const carsxe = new CarsXE('TEST_KEY');

  beforeEach(() => {
    mockedFetch.mockReset();
    mockedFetch.mockImplementation(() => jsonResponse());
  });

  function lastUrl(): string {
    return mockedFetch.mock.calls[0][0];
  }

  it('recallsYmm / recallsByYmm GET /v1/recalls-ymm', async () => {
    await carsxe.recallsYmm({ year: '2023', make: 'Toyota', model: 'Camry' });
    expect(lastUrl()).toContain('https://api.carsxe.com/v1/recalls-ymm');
    expect(lastUrl()).toContain('key=TEST_KEY');
    expect(lastUrl()).toContain('source=npm');
    expect(lastUrl()).toContain('year=2023');
    expect(lastUrl()).toContain('make=Toyota');
    expect(lastUrl()).toContain('model=Camry');

    mockedFetch.mockClear();
    await carsxe.recallsByYmm({ year: '2019', make: 'Honda', model: 'Civic' });
    expect(lastUrl()).toContain('/v1/recalls-ymm');
    expect(lastUrl()).toContain('make=Honda');
  });

  it('recallsBatchSubmit POST /v1/recalls-batch/submit', async () => {
    await carsxe.recallsBatchSubmit({
      vins: ['1HGBH41JXMN109186'],
      webhookUrl: 'https://example.com/hook',
    });
    expect(lastUrl()).toContain('https://api.carsxe.com/v1/recalls-batch/submit');
    expect(lastUrl()).toContain('key=TEST_KEY');
    expect(lastUrl()).toContain('source=npm');
    const init = mockedFetch.mock.calls[0][1];
    expect(init.method).toBe('POST');
    expect(JSON.parse(init.body)).toEqual({
      vins: ['1HGBH41JXMN109186'],
      webhookUrl: 'https://example.com/hook',
    });
  });

  it('recallsBatch status / results / download use batchId', async () => {
    await carsxe.recallsBatchStatus({ batchId: 'brb_test' });
    expect(lastUrl()).toContain('/v1/recalls-batch/status');
    expect(lastUrl()).toContain('batchId=brb_test');

    mockedFetch.mockClear();
    await carsxe.recallsBatchResults({ batchId: 'brb_test' });
    expect(lastUrl()).toContain('/v1/recalls-batch/results');

    mockedFetch.mockClear();
    const csv = await carsxe.recallsBatchDownload({ batchId: 'brb_test' });
    expect(lastUrl()).toContain('/v1/recalls-batch/download');
    expect(csv).toBe('vin,hasRecalls\n');
  });

  it('ymmOptions GET /v1/ymm-options', async () => {
    await carsxe.ymmOptions({ dimension: 'models', year: '2023', make: 'Toyota' });
    expect(lastUrl()).toContain('/v1/ymm-options');
    expect(lastUrl()).toContain('dimension=models');
    expect(lastUrl()).toContain('year=2023');
    expect(lastUrl()).toContain('make=Toyota');
  });

  it('ownership lookups use documented paths and params', async () => {
    await carsxe.ownershipVin({ vin: '1FT8X3BT0BEA61538', include: 'demographics' });
    expect(lastUrl()).toContain('/v1/ownership/vin');
    expect(lastUrl()).toContain('vin=1FT8X3BT0BEA61538');
    expect(lastUrl()).toContain('include=demographics');

    mockedFetch.mockClear();
    await carsxe.ownershipPerson({
      first_name: 'John',
      last_name: 'Sample',
      address: '123 Example St',
      zip: '90210',
    });
    expect(lastUrl()).toContain('/v1/ownership/person');
    expect(lastUrl()).toContain('first_name=John');
    expect(lastUrl()).toContain('last_name=Sample');
    expect(lastUrl()).toContain('zip=90210');

    mockedFetch.mockClear();
    await carsxe.ownershipAddress({ address: '123 Example St', zip: '90210', variant: 'vehicle_history' });
    expect(lastUrl()).toContain('/v1/ownership/address');
    expect(lastUrl()).toContain('variant=vehicle_history');

    mockedFetch.mockClear();
    await carsxe.ownershipZip({ zip: '90210', gender: 'F', min_age: 45, page: 1, limit: 15 });
    expect(lastUrl()).toContain('/v1/ownership/zip');
    expect(lastUrl()).toContain('gender=F');
    expect(lastUrl()).toContain('min_age=45');
    expect(lastUrl()).toContain('page=1');
    expect(lastUrl()).toContain('limit=15');
  });

  it('usPlateDecoder GET /v1/us-platedecoder', async () => {
    await carsxe.usPlateDecoder({ plate: 'H37SFS', state: 'NJ', decodeVIN: true });
    expect(lastUrl()).toContain('/v1/us-platedecoder');
    expect(lastUrl()).toContain('plate=H37SFS');
    expect(lastUrl()).toContain('state=NJ');
    expect(lastUrl()).toContain('decodeVIN=true');
  });
});
