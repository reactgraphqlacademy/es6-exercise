// 2: arrow functions
// To do: make all tests pass, change the expect!

describe('Arrow function', () => {
  describe('Invoked through call or apply', () => {
    it('Should not bind this through call', () => {
      const person = {
        age: 1,

        add: function (age) {
          const f = v => v + this.age
          return f(age)
        },

        addThruCall: function (age) {
          let f = v => {
            return v + this.age
          }

          const hidden = {
            age: 2
          }

          return f.call(hidden, age)
        },

        addThruApply: function (age) {
          let f = v => {
            return v + this.age
          }

          const hidden = {
            age: 2
          }

          return f.apply(hidden, [age])
        }
      }

      let actual = person.add(1)

      expect(actual).toEqual(__)

      actual = person.addThruCall(1)

      expect(actual).toEqual(__)

      actual = person.addThruApply(1)

      expect(actual).toEqual(__)
    })
  })

  describe('Used as methods', () => {
    it('Should return undefined', () => {
      const person = {
        age: 10,
        getAge: function () {
          return this.age
        },
        getAgeByArrow: () => {
          return this ? this.age : undefined
        }
      }

      Object.defineProperty(person, "getAgeProperty", {
        get: () => {
          return this ? this.age : undefined
        }
      })

      let actual = person.getAge()

      expect(actual).toEqual(__)

      actual = person.getAgeByArrow()

      expect(actual).toEqual(__)
    })
  })

  describe('No binding of this & arguments ', () => {
    describe("without its own 'argument' object ", () => {
      it('Should override the argument object of foo()', () => {

        function foo(i) {
          const f = function () { return arguments[0] + i }
          return f(2)
        }

        let actual = foo(1)

        expect(actual).toEqual(__)

      })
      it('Should use the argument object of bar', () => {
        function bar(j) {
          const f = (i) => arguments[0] + i
          return f(2)
        }

        let actual = bar(1)

        expect(actual).toEqual(__)

      })
    })
  })
})