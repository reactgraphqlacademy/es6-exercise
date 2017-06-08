// 4: Classes
// To do: make all tests pass, leave the expect unchanged!

describe('Class in ES6', () => {
  describe('Like a function ...', () => {
    // Declare the Human class below that will satisfy all assertions
    class Human {}
    it('should be a function', () => {
      expect(typeof Human).toEqual('function')
    })
  })

  describe('Property ...', () => {
    // Declare and implement the Man class to satisfy all assertions below
    class Man {
      constructor(name) {
        if (!name) {
          throw Error()
        }

        this.name = name
      }

      Walk(){}
    }
    it('should have a name property called Human', () => {
      expect(Man).toHaveProperty('name', 'Man')
    })

    it('Should have a property prototype of type object', () => {
      expect(Man).toHaveProperty('prototype')
      expect(typeof Man.prototype).toEqual('object')
    })

    it('Man.prototype Should contain a property Walk of type function', () => {
      expect(Man.prototype).toHaveProperty('Walk')
      expect(typeof Man.prototype.Walk).toEqual('function')
    })


    it('Should throw an error if no fullName is passed at the instantiation', () => {
      expect(() => {
        new Man()
      }).toThrow(Error)
    })
  })
})
