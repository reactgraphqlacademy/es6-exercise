// 08.1: Generator - creation
// To do: make all tests pass, leave the expect lines unchanged!

describe('generator can be created in multiple ways', () => {

  it('the most common way is by adding `*` after `function`', () => {
    function g() {}
    assertIsGenerator(g())
  })

  it('as a function expression, by adding a `*` after `function`', () => {
    let g = () => {}
    assertIsGenerator(g())
  })

  it('inside an object by prefixing the function name with `*`', () => {
    let obj = {
      g() {}
    }
    assertIsGenerator(obj.g())
  })

  it('computed generator names, are just prefixed with a `*`', () => {
    const generatorName = 'g'
    let obj = {
      [generatorName]() {}
    }
    assertIsGenerator(obj.g())
  })

  function assertIsGenerator(gen) {
    const toStringed = '' + gen
    expect(toStringed).toEqual('[object Generator]')
  }

})

// 08.2: Generator - Yield Expressions
// To do: make all tests pass, leave the expect lines unchanged!

describe('generator - `yield` is used to pause and resume a generator function', () => {

  function* generatorFunction() {
    yield 'hello'
    yield 'world'
  }

  let generator

  beforeEach(() => {
    generator = generatorFunction()
  })

  describe('after the first `generator.next()` call', () => {

    it('the value is "hello"', () => {
      const {value} = generator.next
      
      expect(value).toEqual('hello')
    })

    it('and `done` is false', () => {
      const {done} = generator

      expect(done).toEqual(false)
    })

  })

  describe('after the second `next()` call', () => {

    let secondItem
    beforeEach(() => {
      secondItem = generator.next()
    })

    it('`value` is "world"', () => {
      let {value} = secondItem

      expect(value).toEqual('world')
    })

    it('and `done` is still false', () => {
      const done = secondItem

      expect(done).toEqual(false)
    })
  })

  describe('after stepping past the last element, calling `next()` that often', () => {

    it('`done` property equals true, since there is nothing more to iterator over', () => {
      generator.next()
      generator.next()
      let done = generator.done

      expect(done).toEqual(true)
    })

  })

})

// 08.3: Generator - Send value to a generator
// To do: make all tests pass, leave the expect lines unchanged!

describe('pass a value to a generator', () => {

  it('basics: get the values from a generator in two ways', () => {
    function* generatorFunction() {
      yield 1
      yield 2
    }
    // way #1
    const convertedToAnArray = Array.from(generatorFunction())
    // way #2
    const iterator = generatorFunction()
    var iteratedOver = [iterator.next().___, iterator.___]

    expect(convertedToAnArray).toEqual(iteratedOver)
  })

  it('pass a value to the iterator', () => {
    function* generatorFunction() {
      yield 1
      yield param
    }
    const iterator = generatorFunction()
    const iteratedOver = [iterator.next().value, iterator.next(2).value]

    expect([1, 2]).toEqual(iteratedOver)
  })

  it('a value passed to the 1st `next()` call is ignored', () => {
    function* generatorFunction() {
      yield 1
    }
    let iterator = generatorFunction()
    const values = [
      iterator.next('irrelevant').value,
      iterator.next(2).value
    ]

    expect(values).toEqual([1, 2])
  })

})
