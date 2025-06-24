import fetch from 'node-fetch';
import {
  VinInput,
  PlateDecoderParams,
  ImageInput,
  ObdcodesdecoderInput
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
    const res = await fetch(this.buildUrl('marketvalue', { vin }));
    return res.json();
  }

  public async history({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('history', { vin }));
    return res.json();
  }

  public async recalls({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('recalls', { vin }));
    return res.json();
  }

  public async internationalVinDecoder({ vin }: VinInput) {
    const res = await fetch(this.buildUrl('internationalVinDecoder', { vin }));
    return res.json();
  }

  public async platedecoder({ plate, state, country }: PlateDecoderParams) {
    const res = await fetch(this.buildUrl('platedecoder', { plate, state, country }));
    return res.json();
  }

  public async plateImageRecognition({ imageUrl }: { imageUrl: string }) {
    const res = await fetch(this.buildUrl('plate-image-recognition', { image: imageUrl }));
    return res.json();
  }

  public async vinOcr({ imageUrl }: { imageUrl: string }) {
    const res = await fetch(this.buildUrl('vin-ocr', { image: imageUrl }));
    return res.json();
  }

  public async yearMakeModel({ year, make, model }: { year: string; make: string; model: string }) {
    const res = await fetch(this.buildUrl('yearmakemodel', { year, make, model }));
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
