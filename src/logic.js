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

const yrsOverEighteen = (age) => {
  let minimum = 18
  if (age < 18) {
    return 'Life insurance is not available for people under age 18'
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
  let conditionObj = conditions.filter(condition => condition.name === conditionName)
  let factor = conditionObj[0].factor
  let extra = newBaseCost * factor
  return newBaseCost + extra
}

const femaleDiscount = (baseCostPlusConditions) => {
  return (baseCostPlusConditions - 12).toFixed(2)
}

module.exports = {
  yrsOverEighteen,
  calculateNewBaseCost,
  conditionFactor,
  femaleDiscount
}
