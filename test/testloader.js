// as suggested from
// https://github.com/karma-runner/karma/issues/1868#issuecomment-296071567
// and https://www.npmjs.com/package/karma-webpack

const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);