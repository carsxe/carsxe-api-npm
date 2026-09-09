import fetch from 'node-fetch';
import {
  VinInput,
  MarketValueInput,
  SpecsInput,
  PlateDecoderParams,
  ImageInput,
  ObdcodesdecoderInput,
  YearMakeModelInput,
  PlateImageRecognitionInput,
  VinOcrInput,
  RecallsYmmInput,
  RecallsBatchSubmitInput,
  RecallsBatchIdInput,
  YmmOptionsInput,
  OwnershipVinInput,
  OwnershipPersonInput,
  OwnershipAddressInput,
  OwnershipZipInput,
  UsPlateDecoderInput,
} from './types';

export const Greeter = (name: string) => `CarsXE API says hello ${name}!`;

export class CarsXE {
  constructor(private apiKey: string) {}

  private getBaseUrl() {
    return 'https://api.carsxe.com';
  }

  private buildUrl(endpoint: string, params: Record<string, any>) {
    const url = new URL(`${this.getBaseUrl()}/${endpoint}`);
    url.searchParams.append('key', this.apiKey);
    url.searchParams.append('source', 'npm');
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.append(key, value);
      }
    }
    return url.toString();
  }

  public async specs(params: SpecsInput) {
    const res = await fetch(this.buildUrl('specs', { ...params }));
    return res.json();
  }

  public async marketvalue(params: MarketValueInput) {
    const res = await fetch(this.buildUrl('v2/marketvalue', { ...params }));
    return res.json();
  }

  public async history(params: VinInput) {
    const res = await fetch(this.buildUrl('history', { ...params }));
    return res.json();
  }

  public async recalls(params: VinInput) {
    const res = await fetch(this.buildUrl('v1/recalls', { ...params }));
    return res.json();
  }

  public async recallsYmm(params: RecallsYmmInput) {
    const res = await fetch(this.buildUrl('v1/recalls-ymm', { ...params }));
    return res.json();
  }

  public async recallsByYmm(params: RecallsYmmInput) {
    return this.recallsYmm(params);
  }

  public async recallsBatchSubmit(params: RecallsBatchSubmitInput) {
    const url = new URL(`${this.getBaseUrl()}/v1/recalls-batch/submit`);
    url.searchParams.append('key', this.apiKey);
    url.searchParams.append('source', 'npm');
    const body: Record<string, any> = {};
    if (params.vins !== undefined) body.vins = params.vins;
    if (params.csv !== undefined) body.csv = params.csv;
    if (params.csvUrl !== undefined) body.csvUrl = params.csvUrl;
    if (params.webhookUrl !== undefined) body.webhookUrl = params.webhookUrl;
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  public async recallsBatchStatus(params: RecallsBatchIdInput) {
    const res = await fetch(this.buildUrl('v1/recalls-batch/status', { ...params }));
    return res.json();
  }

  public async recallsBatchResults(params: RecallsBatchIdInput) {
    const res = await fetch(this.buildUrl('v1/recalls-batch/results', { ...params }));
    return res.json();
  }

  public async recallsBatchDownload(params: RecallsBatchIdInput) {
    const res = await fetch(this.buildUrl('v1/recalls-batch/download', { ...params }));
    return res.text();
  }

  public async internationalVinDecoder(params: VinInput) {
    const res = await fetch(this.buildUrl('v1/international-vin-decoder', { ...params }));
    return res.json();
  }

  public async platedecoder(params: PlateDecoderParams) {
    const res = await fetch(this.buildUrl('v2/platedecoder', { ...params }));
    return res.json();
  }

  public async usPlateDecoder(params: UsPlateDecoderInput) {
    const res = await fetch(this.buildUrl('v1/us-platedecoder', { ...params }));
    return res.json();
  }

  public async lienAndTheft(params: VinInput) {
    const res = await fetch(this.buildUrl('v1/lien-theft', { ...params }));
    return res.json();
  }

  public async plateImageRecognition(params: PlateImageRecognitionInput) {
    const url = new URL(`${this.getBaseUrl()}/platerecognition`);
    url.searchParams.append('key', this.apiKey);
    url.searchParams.append('source', 'npm');
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: params.imageUrl,
      }),
    });
    return res.json();
  }

  public async vinOcr(params: VinOcrInput) {
    const url = new URL(`${this.getBaseUrl()}/v1/vinocr`);
    url.searchParams.append('key', this.apiKey);
    url.searchParams.append('source', 'npm');
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: params.imageUrl,
      }),
    });
    console.log('Request URL:', url.toString());
    return res.json();
  }

  public async yearMakeModel(params: YearMakeModelInput) {
    const res = await fetch(this.buildUrl('v1/ymm', { ...params }));
    return res.json();
  }

  public async ymmOptions(params: YmmOptionsInput = {}) {
    const res = await fetch(this.buildUrl('v1/ymm-options', { ...params }));
    return res.json();
  }

  public async images(params: ImageInput) {
    const res = await fetch(this.buildUrl('images', { ...params }));
    return res.json();
  }

  public async obdcodesdecoder(params: ObdcodesdecoderInput) {
    const res = await fetch(this.buildUrl('obdcodesdecoder', { ...params }));
    return res.json();
  }

  public async ownershipVin(params: OwnershipVinInput) {
    const res = await fetch(this.buildUrl('v1/ownership/vin', { ...params }));
    return res.json();
  }

  public async ownershipPerson(params: OwnershipPersonInput) {
    const res = await fetch(this.buildUrl('v1/ownership/person', { ...params }));
    return res.json();
  }

  public async ownershipAddress(params: OwnershipAddressInput) {
    const res = await fetch(this.buildUrl('v1/ownership/address', { ...params }));
    return res.json();
  }

  public async ownershipZip(params: OwnershipZipInput) {
    const res = await fetch(this.buildUrl('v1/ownership/zip', { ...params }));
    return res.json();
  }
}

export default CarsXE;
