# Example/Boiler-plate for a TDD-ed VueJS frontend to webapps

Using vuejs's Single File Components, webpack, karma, jasmine

## Get started

**prerequisites:** NodeJS, Chrome

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
$ npx cross-env BABEL_ENV=test karma start --no-watch --no-progress
```

Then on your main terminal, to run the test, type:
```
$ npm run test
```

If you don't want to start a server, you can do a single run of karma. Not advised though as it's a bit fragile

```
$ npx cross-env BABEL_ENV=test karma start -no-watch --no-progress --single-run
```

## Background

This is a follow up to my single web page CodePen example for testing a VueJS app using Jasmine: 
[VueJS Unit testing with Jasmine](https://codepen.io/rija/pen/yLyJYEq)
