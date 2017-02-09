# Angular - WebPack setup

This setup provide a custom webpack setup for Angular2+

## Scripts

Script | Description
---------|----------
 serve | Run webpack-dev-server as http server & browser
 serve:prod | Build for production and launch http server & browser
 build | Webpack bundle for development
 build:prod | Optimized webpack build for production
 build:prod:aot | AOT optimized webpack build for production
 test | Runs unit tests with mocha in node & jsdom
 test:serve | Runs unit tests with mocha in browser

## Frameworks/Libraries used

- Angular 
- Typescript
- WebPack 2.x
- Mocha/Chai/Sinon
- Mocha-WebPack / JsDOM
- Yarn
- ngc

## Linting

- TsLint with standard style

## Unit testing

In contrast with most Angular projects we are using a combination of 
Mocha, WebPack and JSDom. This makes a fast and flexible test solution.

## Work In Progress

This setup is work in progress. Following topics will be added:

- more unit-test examples
- docker support 

