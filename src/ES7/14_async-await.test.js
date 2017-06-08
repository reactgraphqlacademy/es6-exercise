// 14: global
// To do: make all tests pass, leave the expect lines unchanged!

describe('Async/Await', () => {
  // This one is an example of a promise test that we need to write in asynchronous way
  it('It returns getQuote as a promise', (done) => {
    function getQuote() {
      return new Promise((resolve, reject) => {
        resolve('Hello World')
      })
    }

    getQuote()
      .then(data => {
        expect(data).toEqual('Hello World')
        done()
      })
  })

  // Now we need to transform the test to run as synchronous, we earn readability
  //it('It returns getQuote as a async/await', /* what you will add here? */ () => {
  it('It returns getQuote as a async/await', async () => {
    function getQuote() {
      return new Promise((resolve, reject) => {
        return resolve('Hello World')
      })
    }

    const data = await getQuote()

    expect(data).toEqual('Hello World')
  })
})