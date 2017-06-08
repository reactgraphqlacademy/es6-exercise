// 13: global
// To do: make all tests pass, leave the expect lines unchanged!

describe('global', () => {

  it('what do you expect???', () => {
    global.datum = 2

    const actual = datum

    expect(typeof actual).toEqual('number')
  })

  it('Should datum as a global be a function', () => {
    global.fnc = () => {}

    const actual = fnc

    expect(typeof actual).toEqual('function')
  })
})