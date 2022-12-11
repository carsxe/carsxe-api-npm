# CarsXE API

CarsXE is a powerful, easy-to-use API that gives you instant access to a wide range of vehicle data, including specs, market value, license plate decoding, and more. Our API is designed to be fast, flexible, and scalable, so you can quickly and easily integrate it into your existing applications and services. With CarsXE, you can get the information you need, when you need it, and take your business to the next level.

## Get Started

To get started with the CarsXE API, follow these steps:

1. [Sign up](https://api.carsxe.com/login) for a CarsXE account, Add a [payment method](https://api.carsxe.com/dashboard/billing) to activate your subscription, get your API key.

2. Install the CarsXE npm package using the following command:

```bash
npm install carsxe-api --save
# or
yarn add carsxe-api
```

3. Import the CarsXE API into your code using the following line:

```js
import CarsXE from 'carsxe-api';
```

4. Use the init method to initialize the API and provide your API key:

```js
const API_KEY = 'ABC123';
const carsxe = new CarsXE(API_KEY);
```

5. Use the various endpoint methods provided by the API to access the data you need.

## Usage

```js
const vin = '123456789';

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

The CarsXE API provides the following endpoint methods:

`specs`: This method allows you to get detailed specs for a specific vehicle, based on its VIN (vehicle identification number).

`marketvalue`: This method allows you to get the current market value for a specific vehicle, based on its make, model, year, and other factors.

`history`: This method allows you to get the history of a specific vehicle, including its ownership, accidents, and other events.

`platedecoder`: This method allows you to decode a license plate number and get information about the vehicle it is registered to.

To use any of these endpoint methods, call the method and provide the necessary parameters, as shown in the following examples:

```js
const vin = '123456789';

// Get specs
const vehicle = carsxe.specs({ vin });

// Get market value
const marketvalue = carsxe.marketvalue({ vin });

// Get history
const history = carsxe.history({ vin });

// Decode license plate number ABC123, state XX and country YY
const platedecoder = carsxe.platedecoder({ plate: 'ABC123', state: 'XX', country: 'YY' });
```

In these examples, each endpoint method is called with the necessary parameters, and the results are returned through a callback function. The callback function receives two arguments: an error object (if an error occurred) and the data returned by the endpoint. The data can then be used in your code as needed.

Overall, the CarsXE API provides a range of powerful, easy-to-use tools for accessing vehicle data and integrating it into your applications and services. By using the endpoint methods provided by the API, you can quickly and easily get the information you need, when you need it, and take your business to the next level. Whether you are a developer looking for vehicle data for your applications, or a business owner looking to enhance your services with vehicle data, the CarsXE API has something to offer. Try it today and see how easy it is to access the vehicle data you need, without any hassle or inconvenience.
