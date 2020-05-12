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

In development mode the application port is configured to `3000` and the clound functions to port `5000`

* `yarn dev` to start the application server
* Server will run on `http://localhost:3000`

* `yarn start` to start the cloud functions server
* Cloud functions will run on `http://localhost:5000`