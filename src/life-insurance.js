const data = require('../data.js')
const conditions = data.conditions
const customer = data.customer
// validate form input

console.log('conditions:', conditions)

const yrsOverEighteen = (age) => {
  let minimum = 18
  if (age < 18) {
    return false
  }
  let totalYrs = age - minimum
  return Math.floor(totalYrs / 5)
}

const calculateNewBaseCost = (fiveYrBlocks) => {
  let base = 100
  let additionalCost = fiveYrBlocks * 20
  return base + additionalCost
}

const conditionFactor = (conditionName, newBaseCost) => {
  let factor = conditions.filter(condition => condition.name === conditionName)
  let extra = newBaseCost * factor
  return newBaseCost + extra
}

const femaleDiscount = (baseCostPlusConditions) => {
  return customer.gender === 'female' ? baseCostPlusConditions - 12 : baseCostPlusConditions
}

const makeQuote = (customer, conditions) => {
  let age = customer.age
  let conditionName = customer.condition
  let fiveYrBlocks = yrsOverEighteen(age)
  let newBaseCost = calculateNewBaseCost(fiveYrBlocks)
  let baseCostPlusConditions = conditionFactor(conditionName, newBaseCost)
  let finalQuote = femaleDiscount(baseCostPlusConditions)
}

module.exports = {
  yrsOverEighteen,
  calculateNewBaseCost,
  conditionFactor,
  femaleDiscount
}
