import { ImageInput, ObdcodesdecoderInput, PlateDecoderParams, VinInput } from './types';

import fetch from 'node-fetch';

export const Greeter = (name: string) => `CarsXE API says hello ${name}!`;

// create class CarsXE to handle all the API calls
export class CarsXE {
  // create constructor to set the API key and version
  constructor(private apiKey: string) {}

  // create method to get the API key
  private getApiKey() {
    return this.apiKey;
  }

  // create method to get the API base URL
  private getApiBaseUrl() {
    return 'https://api.carsxe.com';
  }

  public async specs({ vin }: VinInput) {
    // make a GET request to the /specs endpoint with the VIN
    const response = await fetch(`${this.getApiBaseUrl()}/specs?vin=${vin}&key=${this.getApiKey()}`);
    return response.json();
  }

  public async marketvalue({ vin }: VinInput) {
    // make a GET request to the /marketvalue endpoint with the VIN
    const response = await fetch(`${this.getApiBaseUrl()}/marketvalue?vin=${vin}&key=${this.getApiKey()}`);
    return response.json();
  }

  public async history({ vin }: VinInput) {
    // make a GET request to the /history endpoint with the VIN
    const response = await fetch(`${this.getApiBaseUrl()}/history?vin=${vin}&key=${this.getApiKey()}`);
    return response.json();
  }

  public async platedecoder({ plate, state, country }: PlateDecoderParams) {
    // make a GET request to the /platedecoder endpoint with the plate, state, and country
    let url = `${this.getApiBaseUrl()}/platedecoder?plate=${plate}&state=${state}&key=${this.getApiKey()}`;
    if (country) {
      url += `&country=${country}`;
    }
    const response = await fetch(url);
    return response.json();
  }

  public async images({
    make,
    model,
    year,
    trim,
    color,
    transparent = true,
    angle,
    photoType,
    size,
    license,
  }: ImageInput) {
    // make a GET request to the /images endpoint with the make, model, year, trim, color, transparent, angle, photoType, size, and license
    let url = `${this.getApiBaseUrl()}/images?make=${make}&model=${model}&transparent=${transparent}&key=${this.getApiKey()}`;
    if (year) {
      url += `&year=${year}`;
    }
    if (trim) {
      url += `&trim=${trim}`;
    }
    if (color) {
      url += `&color=${color}`;
    }
    if (angle) {
      url += `&angle=${angle}`;
    }
    if (photoType) {
      url += `&photoType=${photoType}`;
    }
    if (size) {
      url += `&size=${size}`;
    }
    if (license) {
      url += `&license=${license}`;
    }
    const response = await fetch(url);
    return response.json();
  }

  public async obdcodesdecoder({ code }: ObdcodesdecoderInput) {
    const response = await fetch(`${this.getApiBaseUrl()}/obdcodesdecoder?code=${code}&key=${this.getApiKey()}`);
    return response.json();
  }
}

export default CarsXE;
