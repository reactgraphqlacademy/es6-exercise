// 05: map - filter - reduce
// To do: make all tests pass, leave the expect lines unchanged!

describe('use map', () => {
  const pets = [
    { name: 'guincho', species: 'dog'},
    { name: 'felix', species: 'cat'},
    { name: 'nemo', species: 'fish'},
    { name: 'tweety', species: 'bird'},
    { name: 'snout', species: 'pig'},
    { name: 'fluffy', species: 'rabbit'},
  ]

  it('map pets to match the string', () => {
    // Write a concise anonymous function using .map to return an array containing the array above
    const petNames = __

    expect(petNames).toEqual([
      'guincho is a dog',
      'felix is a cat',
      'nemo is a fish',
      'tweety is a bird',
      'snout is a pig',
      'fluffy is a rabbit'
    ])
  })
})

describe('use filter', () => {
  const numbers = [34, 45, 65, 23, 18, 70, 85, 100, 205]

  it('filters for numbers over 60', () => {
    // Write a concise anonymous function using .filter to return an array containing all the numbers over 60 called overSixty
    const overSixty = __

    expect(overSixty).toEqual([
      65,
      70,
      85,
      100,
      205
    ])
  })
})

describe('use reduce', () => {

  const orders = [
    { amount: 300 },
    { amount: 50 },
    { amount: 440 },
    { amount: 225 },
    { amount: 155 },
  ]

  it('returns the total amount', () => {
    // Use .reduce to return the sum of the orders using a concise anonymous function
    // stored in a variable called orderTotal
    const orderTotal = __

    expect(orderTotal).toEqual(1170)
  })
})
