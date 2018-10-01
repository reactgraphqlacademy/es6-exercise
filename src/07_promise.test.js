// 07.1: Promise - basics
// To do: make all tests pass, leave the expect lines unchanged!
//global.Promise = require.requireActual('promise')

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', () => {

  it('`Promise` is a global function', () => {
    const expectedType = '???'

    expect(typeof Promise).toEqual(expectedType)
  })

  describe('simplest promises', () => {

    it('resolve a promise by calling the `resolve` function given as first parameter of the function parameter', (done) => {
      let promise = new Promise((resolve) => {
      })

      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')))
    })

    it('rejecting a promise is done by calling the callback given as 2nd parameter of the function parameter', (done) => {
      let promise = new Promise(() => {
      })

      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    })

  })

})


// 07.2: Promise - creation
// To do: make all tests pass, leave the expect lines unchanged!

describe('a promise can be created in multiple ways', () => {

  describe('most commonly Promises get created using the constructor', () => {

    it('by passing a resolve function to it', () => {
      const promise = new Promise(() => resolve())
      return promise
    })
  })


  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', () => {

    it('returns all results', (done) => {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),
        new Promise(resolve => resolve(2)),
        new Promise(resolve => resolve(3))
      ])

      // Note: In that case you need to modify the expect!!!
      promise
        .then(value => {
          expect(value).toEqual([1, 2])
          done()
        })
        .catch(e => {
          const err = new Error('Error: Are you sure the that is expected?')
          console.log(err)
          throw err
          done()
        })
    }, 100)

  }, 100)

})

class NotRejectedError extends Error {
  constructor() {
    super()
    this.message = 'Expected promise to be rejected.'
  }
}


// 07.3: Promise - chaining
// To do: make all tests pass, leave the expect lines unchanged!

describe('chaining multiple promises can enhance readability', () => {

  describe('chain promises', () => {

    const removeMultipleSpaces = string => string.replace(/\s+/g, ' ')

    it('`then()` receives the result of the promise it was called on', () => {
      const wordsPromise = Promise.resolve('one   space     between each     word')
      return wordsPromise
        .then(string => removeMultipleSpaces())
        .then(actual => {
          expect(actual).toEqual('one space between each word')
        })

    })

    const appendPeriod = string => `${string}.`

    it('multiple `then()`s can be chained', () => {
      const wordsPromise = Promise.resolve('Sentence without       an end')
      return wordsPromise
        .then(removeMultipleSpaces)
        .then(actual => {
          expect(actual).toEqual('Sentence without an end.')
        })

    })

    const trim = string => string.replace(/^\s+/, '').replace(/\s+$/, '')

    it('order of the `then()`s matters', () => {
      const wordsPromise = Promise.resolve('Sentence without       an end ')
      return wordsPromise
        .then(appendPeriod)
        .then(trim)
        .then(removeMultipleSpaces)
        .then(actual => {
          expect(actual).toEqual('Sentence without an end.')
        })
    })

  })

})
