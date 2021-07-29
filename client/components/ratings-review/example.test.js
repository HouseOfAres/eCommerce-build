const exampleTest = require('./exampleTest.js');

test('add 2 + 2 which should equal 4', () => {
  expect(exampleTest(2, 2)).toBe(4);
});

// const add = require("./exampleModule").add;
// const multiply = require("./exampleModule").multiply;

// /*
// A "describe" block can be used to group together multiple tests
// which check the same nodule or function.
//  */
// describe.only("Example tests", function(){

//   // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
//   it("Should add small numbers", function(){
//     /* This test suite is written in Jest. There are many more methods other than "toBe"
//     Go to: https://jestjs.io/docs/en/expect
//     to find more options if "toBe" doesn't fit your use case.
//     */
//     expect(add(1,1)).toBe(2);
//   });

//   // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
//   it("Should return Infinity for numbers of type import access from '../config.js';
//   });
// });

// /*
// You start here. 1 describe block per toy problem.
// Notice the method "only" above. Because it is there, the describe block below won't run.
// You'll need to remove the "only" from the block above. You can use that method to only run tests
// on the toy problem you're currently working on. https://jestjs.io/docs/en/api#describeonlyname-fn
// */
// describe("Replace this with the name of toy problem", function(){
//   test("Replace this with the desired behaviour", function(){

//     // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
//     // Just write two tests referring to the "Example Suites" example above for reference.
//     expect(add(1,0)).toBe(0);
//     expect(multiply(1,1)).toBe(1);
//   });
// });
