// 03: Default parameters - basics
// To do: make all tests pass, leave the expect lines unchanged!

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', () => {
    let number = (int=0) => int

    expect(number()).toEqual(0)
  })

  it('it is not used when a value is given', () => {
    function xhr(method='data') {
      return method
    }

    expect(xhr('POST')).toEqual('POST')
  })

  it('it is evaluated at run time', () => {
    let defaultValue = 42
    function xhr(method = `value: ${defaultValue}`) {
      return method
    }

    expect(xhr()).toEqual('value: 42')
    defaultValue = 23
  })

  it('it can also be a function', () => {
    let defaultValue = () => 33
    function fn(value = defaultValue()) {
      return value
    }

    expect(fn()).toEqual(defaultValue())
  })

})
