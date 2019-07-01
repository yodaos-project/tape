'use strict';

var test = require('../');

test.beforeEach(function (t) {
  t.context = 1;
})

test('beforeEach test1', function (t) {
  t.plan(2);
  t.equal(t.context, 1);
  t.equal(t.context, 1);
});


test('beforeEach test2', function (t) {
  t.plan(2);
  t.equal(t.context, 1);
  t.equal(t.context, 1);
});
