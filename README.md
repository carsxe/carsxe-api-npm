# 🚗 CarsXE API

[![Version](https://img.shields.io/npm/v/carsxe-api.svg)](https://www.npmjs.com/package/carsxe-api)
[![Downloads](https://img.shields.io/npm/dm/carsxe-api.svg)](https://www.npmjs.com/package/carsxe-api)
[![Minified Size](https://img.shields.io/bundlephobia/minzip/carsxe-api)](https://bundlephobia.com/result?p=carsxe-api)
[![Try on RunKit](https://badge.runkitcdn.com/carsxe-api.svg)](https://runkit.com/npm/carsxe-api)

**CarsXE** is a powerful and developer-friendly API that gives you instant access to a wide range of vehicle data. From VIN decoding and market value estimation to vehicle history, images, OBD code explanations, and plate recognition, CarsXE provides everything you need to build automotive applications at scale.

🌐 **Website:** [https://api.carsxe.com](https://api.carsxe.com)  
📄 **Docs:** [https://api.carsxe.com/docs](https://api.carsxe.com/docs)  
📦 **All Products:** [https://api.carsxe.com/all-products](https://api.carsxe.com/all-products)

---

## 🚀 Installation

```bash
npm install carsxe-api
# or
yarn add carsxe-api
```

### Import the CarsXE API into your code using the following line

```js
import CarsXE from 'carsxe-api';
```

### Use the init method to initialize the API and provide your API key

```js
const carsxe = new CarsXE('YOUR_API_KEY');
```

### Use the various endpoint methods provided by the API to access the data you need

## Usage

```js
const vin = 'WBAFR7C57CC811956';

carsxe
  .specs({ vin })
  .then((vehicle) => console.log(vehicle.input.vin))
  .catch((error) => console.error(error));
```

Or using ES modules and async/await:

```js
const vehicle = await carsxe.specs({ vin });

console.log(vehicle.input.vin);
```

## Endpoints

The CarsXE API provides the following endpoint:

`specs` – Decode VIN & get full vehicle specifications

`internationalVinDecoder` – Decode VIN with worldwide support

`platedecoder` – Decode license plate info (plate, state, country)

`marketvalue` – Estimate vehicle market value based on VIN

`history` – Retrieve vehicle history (ownership, accidents, etc.)

`images` – Fetch images by make, model, year, trim

`recalls` – Get safety recall data for a VIN

`plateImageRecognition` – Read & decode plates from images

`vinOcr` – Extract VINs from images using OCR

`yearMakeModel` – Query vehicle by year, make, model and trim (optional)

`obdcodesdecoder` – Decode OBD error/diagnostic codes

To use any of these endpoint methods, call the method and provide the necessary parameters, as shown in the following examples:

```js
// VIN Specifications
const specs = await carsxe.specs({ vin: 'WBAFR7C57CC811956' }););

// International VIN Decoder
const intVin = await carsxe.internationalVinDecoder({ vin: 'WF0MXXGBWM8R43240' }););

// Market Value
const value = await carsxe.marketvalue({ vin: 'WBAFR7C57CC811956' });

// History
const history = await carsxe.history({ vin: 'WBAFR7C57CC811956' });

// License Plate Decoder
const plate = await carsxe.platedecoder({ plate: '7XER187', state: 'CA', country: 'US' });

// Vehicle Images
const imgs = await carsxe.images({ make: 'BMW', model: 'X5', year: '2019' });

// Vehicle Recalls
const recalls = await carsxe.recalls({ vin: '1C4JJXR64PW696340' });

// Plate Image Recognition
const plateImg = await carsxe.plateImageRecognition({ imageUrl: 'https://api.carsxe.com/img/apis/plate_recognition.JPG' });

// VIN OCR from image
const vinOcr = await carsxe.vinOcr({ imageUrl: 'https://user-images.githubusercontent.com/5663423/30922082-64edb4fa-a3a8-11e7-873e-3fbcdce8ea3a.png' });

// Year‑Make‑Model search
const ymm = await carsxe.yearMakeModel({ year: '2023', make: 'Toyota', model: 'Camry' });

// OBD Code Decoder
const obd = await carsxe.obdcodesdecoder({ code: 'P0115' });
```

In these examples, each endpoint method is called with the necessary parameters, and the results are returned through a callback function. The callback function receives two arguments: an error object (if an error occurred) and the data returned by the endpoint. The data can then be used in your code as needed.

Overall, the CarsXE API provides a range of powerful, easy-to-use tools for accessing vehicle data and integrating it into your applications and services. By using the endpoint methods provided by the API, you can quickly and easily get the information you need, when you need it, and take your business to the next level. Whether you are a developer looking for vehicle data for your applications, or a business owner looking to enhance your services with vehicle data, the CarsXE API has something to offer. Try it today and see how easy it is to access the vehicle data you need, without any hassle or inconvenience.

## Contributing

We welcome contributions to the CarsXE API! If you have ideas for improvements, bug fixes, or new features, please feel free to submit a pull request or open an issue on our GitHub repository.
PRs and issues are welcome at:
🔗 <https://github.com/carsxe/carsxe-api-npm>

## License

MIT © CarsXE
