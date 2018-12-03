// 06: arrow functions

describe("06 Arrow functions", () => {
  it("Should bind the context to this", () => {
    const person = {
      age: 1,

      add: function(age) {
        // finish the implementation of the next function using an arrow function
        // and using the parameter v
        function f(v) {
          return this.age + v;
        }

        return f(age);
      }
    };

    let actual = person.add(1);

    expect(actual).toEqual(2);
  });
});
