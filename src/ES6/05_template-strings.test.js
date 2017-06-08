// 5: template strings
// To do: make all tests pass, leave the expect unchanged!

describe('a template string, is wrapped in ` (backticks) instead of \' or "', () => {

  describe('by default, behaves like a normal string', () => {

    it('just surrounded by backticks', () => {
      const str = `like a string`
      expect(str).toEqual('like a string')
    })

  })

  const x = 42
  const y = 23

  describe('can evaluate variables, which are wrapped in "${" and "}"', () => {

    it('e.g. a simple variable "${x}" just gets evaluated', () => {
      const evaluated = `x=${x}`
      expect(evaluated).toEqual('x=' + x)
    })

    it('multiple variables get evaluated too', () => {
      const evaluated = `${ x }\+${ y }`
      expect(evaluated).toEqual(x + '+' + y)
    })

  })

  describe('can evaluate any expression, wrapped inside "${...}"', () => {

    it('all inside "${...}" gets evaluated', () => {
      const evaluated = parseInt(`${ x + y }`)
      expect(evaluated).toEqual(x+y)
    })

    it('inside "${...}" can also be a function call', () => {
      const getDomain = () => {
        return 'tddbin.com'
      }
      const evaluated = `${ getDomain() }`
      expect(evaluated).toEqual('tddbin.com')
    })

  })

})
