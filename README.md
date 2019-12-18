[![Build Status](https://travis-ci.org/rija/tdd-vuejs-frontend-webpack.svg?branch=master)](https://travis-ci.org/rija/tdd-vuejs-frontend-webpack)

# Example/Boiler-plate for a TDD-ed VueJS frontend to webapps

Using Vuejs's Single File Components, Webpack, Karma, Jasmine

## Get started

**prerequisites:** NodeJS, Chrome, Firefox

```
$ npm install
```

## Build the app

```
$ npm run build
```

## Running the tests

On one terminal window/tab, start the Karma server:

```
$ npx cross-env BABEL_ENV=test karma start
```

Normally, the test suite will run whenever the code changes, but if one wants to trigger an explicit test run, this is the command to type:
```
$ npm test
```

If starting a server is not desirable (e.g: CI), this one-off command will run the tests in a standalone fashion:

```
$ npx cross-env BABEL_ENV=test karma start --single-run
```

## Background

Inspired by the examples from VueJS docs and the boilerplate Github repo made by Edd Yerburgh to test VueJS app with Karma/Mocha/Chai: [vue-test-utils-karma-example](https://github.com/eddyerburgh/vue-test-utils-karma-example)

_**Note**: Whose book can be found here:[Testing Vue.js Applications](https://www.manning.com/books/testing-vue-js-applications)_


I wanted to create a skeleton project that works in 2019 for the _"Future me"_ whenever I need to spin off a VueJS project to test with Jasmine while learning how to use these tools together.


This is a follow up to my single web page CodePen example for testing a VueJS app using Jasmine: 
[VueJS Unit testing with Jasmine](https://codepen.io/rija/pen/yLyJYEq)

## TODO

* [ ] Fix coverage
* [ ] Add Safari to the list of browsers
