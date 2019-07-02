'use strict';

var test = require('../');

test.beforeEach(function (t) {
  t.context = { bar: 'foo' };
})

test.beforeEach(function (t) {
  t.context.foo = 'bar';
})

test('beforeEach test1', function (t) {
  t.plan(1);
  t.deepEqual(t.context, { bar: 'foo', foo: 'bar' });
});
