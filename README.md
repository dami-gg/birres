# Birres

Application to keep a collection of tasted beers with ratings and beer information.

## Tech stack

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Apollo](https://www.apollographql.com/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
  - [Authentication](https://firebase.google.com/docs/auth)
  - [Cloud functions](https://firebase.google.com/docs/functions)
- [Netlify](https://www.netlify.com/)

## Getting started

### Setup

Install dependencies for both the main application and the cloud functions

* `yarn`

* `cd functions`
* `yarn`

* Make sure you have [access to the local npm repository](#using-internal-npm-repository)
* `npm install`

### Run

In development mode the application port is configured to `3000` and the clound functions to port `5001`

* `yarn start:dev` to start the application server
* Server will run on `http://localhost:3000`

* `cd functions && yarn dev` to start the cloud functions server
* Cloud functions will run on `http://localhost:5001`

You can also execute both together with the following command from the project root directory:

* `yarn dev`

### Debug

A graphql playground can be found in local environments under:

`http://localhost:5001/beer-collection/us-central1/graphql`

To be able to execute queries in it, a JWT token must be set as HTTP header in the format: `Authorization: Bearer <token>`

## Tests

* `yarn test` to run all tests once
* `yarn test:watch` to run all tests in watch mode

### Code Coverage

* `yarn test:coverage` to run tests and get code coverage report (accessible by `open build/coverage/index.html`)