/* this shim is used to run Angular unit tests the browser with webpack */ 

// Load polyfills
require('core-js/es6')
require('core-js/es7/reflect')

require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/proxy')
require('zone.js/dist/sync-test')
require('zone.js/dist/async-test')
require('zone.js/dist/fake-async-test')
require('zone.js/dist/mocha-patch')

// Setup Angular TestBed
var testing = require('@angular/core/testing')
var browser = require('@angular/platform-browser-dynamic/testing')
testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting())

// load our test helper
require('./test.helper.ts')

// load all other *.spec.ts files
var context = require.context('../src/app', true, /\.spec\.ts/)
context.keys().forEach(context)
module.exports = context
