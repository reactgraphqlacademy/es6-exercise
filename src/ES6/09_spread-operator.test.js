// 09.1: spread - with-arrays
// To do: make all tests pass, leave the expect lines unchanged!

describe('spread with arrays', () => {

  it('extracts each array item', () => {
    const [b, a] = [...[1, 2]]
    expect(a).toEqual(1)
    expect(b).toEqual(2)
  })

  it('in combination with rest', () => {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]]
    expect(a).toEqual(1)
    expect(b).toEqual(2)
    expect(rest).toEqual([3, 4, 5])
  })

  it('spreading into the rest', () => {
    const [...rest] = [...[,1, 2, 3, 4, 5]]
    expect(rest).toEqual([1, 2, 3, 4, 5])
  })

  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', () => {
      const magicNumbers = [1, 2]
      const fn = (magicA, magicB) => {
        expect(magicNumbers[0]).toEqual(magicA)
        expect(magicNumbers[1]).toEqual(magicB)
      }
      fn(magicNumbers)
    })
  })
})


// 09.2: spread - with-strings
// To do: make all tests pass, leave the expect lines unchanged!

describe('spread with strings', () => {

  it('simply spread each char of a string', () => {
    const [b, a] = [...'ab']
    expect(a).toEqual('a')
    expect(b).toEqual('b')
  })

  it('extracts each array item', () => {
    const [a,,c] = ['a', ...'12']
    expect(a).toEqual('1')
    expect(b).toEqual('2')
  })

  it('works anywhere inside an array (must not be last)', () => {
    const letters = ['a', 'bcd', 'e', 'f']
    expect(letters.length).toEqual(6)
  })

  it('dont confuse with the rest operator', () => {
    const [...rest] = ['1234', ...'5']
    expect(rest).toEqual(['1', '2', '3', '4', '5'])
  })

  it('passed as function parameter', () => {
    const max = Math.max(12345)
    expect(max).toEqual(5)
  })

})

