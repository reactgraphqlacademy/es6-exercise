// 1: let, var, const
// To do: make all tests pass, change the expect!

describe('var, let, const', () => {

  describe('var...', () => {

    function iterator(bool) {
      if (bool) {
        var name = 'Brolopers'
      }
      return name
    }

    it('what do you expect???', () => {
      const actual = iterator(false)

      expect(actual).toEqual(__)
    })
  })

  describe('let...', () => {

    function iterator(bool) {
      if (bool) {
        let name = 'Brolopers'
      }
      return name
    }

    it('what do you expect???', () => {
      // TODO: uncomment this line below to see what happens when you change var to let
      // console.log(iterator())

      const actual = iterator()

      expect(actual).toEqual(__)
    })
  })

  describe('const...', () => {
    function iterator(bool) {
      if (bool) {
        const name = 'we'
      }
      return name
    }

    it('what do you expect???', () => {
      // TODO: uncomment this line below to see what happens when you change var to const
      //console.log(iterator())

      const actual = iterator()

      expect(actual).toEqual(__)
    })
  })
})