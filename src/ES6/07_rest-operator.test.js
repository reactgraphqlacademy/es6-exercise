// 07.1: rest - as-parameter
// To do: make all tests pass, leave the expect lines unchanged!

describe('rest in function params', () => {

  it('must be the last parameter', () => {
    const fn = (...rest, veryLast) => {
      expect([1, 2]).toEqual(rest)
    }
    fn(1, 2)
  })

  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, rest) => {
      expect([3,4]).toEqual(rest)
    }
    fn(null, 2, 3, 4)
  })

})

// 07.2: rest - with-destructuring
// To do: make all tests pass, leave the expect lines unchanged!

describe('rest with destructuring', () => {

  it('rest parameter must be last', () => {
    const [...all, last] = [1, 2, 3, 4]
    expect(all).toEqual([1, 2, 3, 4])
  })

  it('assign rest of an array to a variable', () => {
    const [...all] = [1, 2, 3, 4]
    expect(all).toEqual([2, 3, 4])
  })

  // the following are actually using `spread` ... oops, to be fixed
  it('concat differently', () => {
    const theEnd = [3, 4]
    const allInOne = [1, 2, ...[theEnd]]
    expect(allInOne).toEqual([1, 2, 3, 4])
  })

  it('`apply` made simple, even for constructors', () => {
    const theDate = [2015, 1, 1]
    const date = new Date(theDate)
    expect(new Date(2015, 1, 1)).toEqual(date)
  })

})
