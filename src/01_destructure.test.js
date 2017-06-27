// 01.1: destructuring - array
// To do: make all tests pass, leave the expect unchanged!

describe('destructuring arrays makes shorter code', () => {

  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0]`', () => {
    let firstValue = [1]

    expect(firstValue).toEqual(1)
  })

  it('leading commas', () => {
    const all = ['ax', 'why', 'zet']
    const [,z] = all

    expect(z).toEqual('zet')
  })

  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23]
    const [firstName, surname, age] = user

    const expected = 'Some One = 23 years'
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected)
  })

  it('chained assignments', () => {
    let c, d
    let a, b = [c, d] = [1, 2]

    expect([a, b, c, d]).toEqual([1, 2, 1, 2])
  })

  it('in for-of loop', () => {
    for (var [a, b] of [[0, 1, 2]]) {}
    expect([a, b]).toEqual([1, 2])
  })

})

// 6.2: destructuring - string
// To do: make all tests pass, leave the expect lines unchanged!

describe('destructuring also works on strings', () => {


  it('destructure every character', () => {
    let a, b, c = 'abc'

    expect([a, b, c]).toEqual(['a', 'b', 'c'])
  })

  it('missing characters are undefined', () => {
    const [a, c] = 'ab'
    expect(c).toEqual(void 0)
  })

  it('unicode character work too', () => {
    const [space, coffee] = 'a ☕'

    expect(coffee).toEqual('\u{2615}')
  })

})

// 6.3: destructuring - object
// To do: make all tests pass, leave the expect lines unchanged!

describe('destructuring objects', () => {

  it('is simple', () => {
    const x = {x: 1}

    expect(x).toEqual(1)
  })

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42}
      const {magic: [second]} = {magic}

      expect(second).toEqual(42)
    })
    it('object and array', () => {
      const {z:[x]} = {z: [23, 42]}

      expect(x).toEqual(42)
    })
    it('array and object', () => {
      const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]]

      expect(lang).toEqual('ES6')
    })
  })

})

// 6.4: destructuring - defaults
// To do: make all tests pass, leave the expect lines unchanged!

describe('destructuring can also have default values', () => {

  it('for an empty array', () => {
    const [a:1] = []

    expect(a).toEqual(1)
  })

  it('for a missing value', () => {
    const [b=2] = [1,,3]

    expect(b).toEqual(2)
  })

  it('in an object', () => {
    const [a, b=2] = {a: 1}

    expect(b).toEqual(2)
  })

  it('if the value is undefined', () => {
    const {a, b=[2]} = {a: 1, b: void 0}

    expect(b).toEqual(2)
  })

  it('also a string works with defaults', () => {
    const [b=2] = '1'

    expect(a).toEqual('1')
    expect(b).toEqual(2)
  })

})

// 6.5: destructuring - parameters
// To do: make all tests pass, leave the expect lines unchanged!

describe('destructuring function parameters', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = ({id}, {name}) => {
        expect(id).toEqual(42)
        expect(name).toEqual('Wolfram')
      }
      const user = {name: 'Wolfram', id: 42}
      fn(user)
    })

    it('multiple params from array/object', () => {
      const fn = ([{name}]) => {
        expect(name).toEqual('Alice')
      }
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}]
      fn(users)
    })
  })

  describe('default values', () => {

    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'}
      const fn = ([user]) => {
        expect(user).toEqual(defaultUser)
      }
      fn([])
    })

    it('mix of parameter types', () => {
      const fn = (id, [arr], {obj}) => {
        expect(id).toEqual(1)
        expect(arr).toEqual(2)
        expect(obj).toEqual(3)
      }
      fn(void 0, [], {})
    })
  })

})

// 6.6: destructuring - assign
// To do: make all tests pass, leave the expect lines unchanged!

describe('assign object property values to new variables while destructuring', () => {

  describe('for simple objects', () => {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x: newName} = {x: 1}

      expect(y).toEqual(1)
    })
  })

  describe('for function parameter names', () => {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x}) => {

        expect(y).toEqual(1)
      }
      fn({x: 1})
    })
  })

})
