// 06: arrow functions

describe('06 Arrow functions', () => {
  it('Should bind the context to this', () => {
    const person = {
      age: 1,

      add: function (age) {
        const f = v => v + this.age

        return f(age)
      },
    }

    let actual = person.add(1)

    expect(actual).toEqual(2)
  })
})
