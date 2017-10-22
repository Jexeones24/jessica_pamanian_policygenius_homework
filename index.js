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
  console.log('conditions:', conditions)
  let conditionObj = conditions.filter(condition => condition.name === conditionName)
  console.log('condition obj:', conditionObj)
  let factor = conditionObj[0].factor
  let extra = newBaseCost * factor
  return newBaseCost + extra
}

const femaleDiscount = (baseCostPlusConditions) => {
  return (baseCostPlusConditions - 12).toFixed(2)
}

const makeQuote = (customer, conditions) => {
  let age = customer.age
  console.log('age:', age)
  let conditionName = customer.condition
  console.log('condition name:', conditionName)
  let fiveYrBlocks = yrsOverEighteen(age)
  console.log('five yr blocks:', fiveYrBlocks)
  let newBaseCost = calculateNewBaseCost(fiveYrBlocks)
  console.log('new base cost:', newBaseCost)
  let baseCostPlusConditions = conditionFactor(conditionName, newBaseCost)
  console.log('base plus conditions:', baseCostPlusConditions)
  return customer.gender === 'female' ? femaleDiscount(baseCostPlusConditions) : baseCostPlusConditions
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', submit)
})

function submit (event) {
  event.preventDefault()
  let form = document.getElementById('form')
  let newCustomer = {}
  newCustomer.name = document.getElementById('name').value
  newCustomer.age = document.getElementById('age').value
  newCustomer.gender = document.getElementById('gender').value
  newCustomer.condition = document.getElementById('health-condition').value
  let quote = makeQuote(newCustomer)
  form.reset()
  console.log('quote:', quote)
  displayQuote(newCustomer, quote)
}

function displayQuote (newCustomer, quote) {
  let target = document.querySelector('#policy-price')
  let p = document.createElement('p')
  p.innerHTML = quote
  target.parentNode.insertBefore(p, target)
}
