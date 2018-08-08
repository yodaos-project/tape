'use strict';

var test = require('../');
// var fs = require('fs');
// var ws = fs.createWriteStream('y.log');
// test.createStream().pipe(ws);

test('timing test', function (t) {
  t.plan(2);

  t.equal(typeof Date.now, 'function');
  var start = new Date;

  setTimeout(function () {
    t.equal(new Date - start, 100);
  }, 100);
});
