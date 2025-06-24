import fetch from 'node-fetch';
import {
  VinInput,
  PlateDecoderParams,
  ImageInput,
  ObdcodesdecoderInput,
  YearMakeModelInput,
  PlateImageRecognitionInput,
  VinOcrInput
} from './types';

export const Greeter = (name: string) => `CarsXE API says hello ${name}!`;

export class CarsXE {
  constructor(private apiKey: string) { }

  private getBaseUrl() {
    return 'https://api.carsxe.com';
  }

  private buildUrl(endpoint: string, params: Record<string, any>) {
    const url = new URL(`${this.getBaseUrl()}/${endpoint}`);
    url.searchParams.append('key', this.apiKey);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.append(key, value);
      }
    }
    return url.toString();
  }

  public async specs({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('specs', { vin }));
    return res.json();
  }

  public async marketvalue({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('v2/marketvalue', { vin }));
    return res.json();
  }

  public async history({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('history', { vin }));
    return res.json();
  }

  public async recalls({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('v1/recalls', { vin }));
    return res.json();
  }

  public async internationalVinDecoder({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('v1/internationalVinDecoder', { vin }));
    return res.json();
  }

  public async platedecoder({ plate, state, country = 'US' }: PlateDecoderParams) {
    const res = await fetch(this.buildUrl('v2/platedecoder', { plate, state, country }));
    return res.json();
  }

  public async plateImageRecognition({ imageUrl }: PlateImageRecognitionInput) {
    const res = await fetch(`${this.getBaseUrl()}/platerecognition`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: this.apiKey,
        image: imageUrl,
      }),
    });
    return res.json();
  }

  public async vinOcr({ imageUrl }: VinOcrInput) {
    const res = await fetch(`${this.getBaseUrl()}/vin-ocr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: this.apiKey,
        image: imageUrl,
      }),
    });
    return res.json();
  }

  public async yearMakeModel({ year, make, model, trim }: YearMakeModelInput) {
    const res = await fetch(this.buildUrl('v1/ymm', { year, make, model, trim }));
    return res.json();
  }

  public async images(input: ImageInput) {
    const res = await fetch(this.buildUrl('images', input));
    return res.json();
  }

  public async obdcodesdecoder({ code }: ObdcodesdecoderInput) {
    const res = await fetch(this.buildUrl('obdcodesdecoder', { code }));
    return res.json();
  }
}

export default CarsXE;
