const conditions = [
  {
    name: 'allergies',
    factor: 0.01
  },
  {
    name: 'sleep apnea',
    factor: 0.06
  },
  {
    name: 'heart disease',
    factor: 0.17
  }
]

const customer = {
  name: 'Jess',
  age: 18,
  gender: 'female',
  condition: 'allergies'
}

module.exports = {
  conditions,
  customer
}
