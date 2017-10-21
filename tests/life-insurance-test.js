const assert = require('assert')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const insurance = require('../src/life-insurance')

// validate form input
// const customer = {
//   name: 'Jess',
//   age: 18,
//   gender: 'female',
//   condition: 'allergies'
// }

describe('insurance', () => {
  describe('yrsOverEighteen()', () => {
    it('should only accept number', () => {
      let age = 18
      let expected = true
      let actual = typeof age === 'number'
      assert(expected === actual)
    })
    it('should return number', () => {
      let age = 18
      let expected = typeof age === 'number'
      let actual = insurance.yrsOverEighteen(age)
      assert(expected === actual)
    })
    it('should not accept customers aged fewer than 18 years', () => {
      let age = 14
      let expected = false
      let actual = age >= 18
      assert(expected === actual)
    })
    it('should return number of 5 year blocks over 18 years of age the customer is', () => {
      let age = 23
      let expected = 1
      let actual = insurance.yrsOverEighteen(age)
      assert(expected === actual)
    })
    it('should return number of 5 year blocks over 18 years of age the customer is', () => {
      let age = 28
      let expected = 2
      let actual = insurance.yrsOverEighteen(age)
      assert(expected === actual)
    })
    it('should return number of 5 year blocks over 18 years of age the customer is', () => {
      let age = 20
      let expected = 0
      let actual = insurance.yrsOverEighteen(age)
      assert(expected === actual)
    })
  })
  describe('baseCostIncrease()', () => {
    it('should increase base cost by 20 dollars for every 5 years over 18', () => {
      let age = 23
      let expected = 120
      let actual = insurance.baseCostIncrease(age)
      assert(expected === actual)
    })
    it('should increase base cost by 20 dollars for every 5 years over 18', () => {
      let age = 33
      let expected = 160
      let actual = insurance.baseCostIncrease(age)
      assert(expected === actual)
    })
  })
  describe('conditionFactor()', () => {
    it('should increase base cost by 1% for allergies', () => {
      let condition = 'allergy'
      let baseCost = 100
      let expected = 101
      let actual = insurance.conditionFactor(baseCost, condition)
      assert(expected === actual)
    })
    it('should increase base cost by 6% for sleep apnea', () => {
      let condition = 'sleep apnea'
      let baseCost = 100
      let expected = 106
      let actual = insurance.conditionFactor(baseCost, condition)
      assert(expected === actual)
    })
    it('should increase base cost by 17% for heart disease', () => {
      let condition = 'heart disease'
      let baseCost = 100
      let expected = 117
      let actual = insurance.conditionFactor(baseCost, condition)
      assert(expected === actual)
    })
  })
  describe('femaleDiscount()', () => {
    it('should subtract 12 dollars from final quote', () => {
      let finalQuote = 120
      let expected = 108
      let actual = insurance.femaleDiscount(finalQuote)
      assert(expected === actual)
    })
  })
})

// downcase all conditions
// yrsOverEighteen returns a number
// baseCostIncrease
// conditionFactor
// allergy

// sleep apnea

// heart disease

// female discount - check for 'female' prop