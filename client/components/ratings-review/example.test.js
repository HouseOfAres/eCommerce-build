const exampleTest = require('./exampleTest.js');

test('add 2 + 2 which should equal 4', () => {
  expect(exampleTest(2, 2)).toBe(4);
});