const chai = require('chai')

const expect = chai.expect

const { itemsInSection, cheapItems, countItemsInSection } = require('./database.js')

it('itemsInSection("bulk") should return "Flour", "Pasta", and "Rice"', () => {
  expect(itemsInSection('bulk')).to.deep.equal(['Flour', 'Pasta', 'Rice'])
})

it('cheapItems() should return "Fish" as the first item and "Honey" as the last item', () => {
  const result = cheapItems()
  expect(result[0]).to.equal('Fish')
  expect(result[result.length - 1]).to.equal('Honey')
})

it('countItemsInSection() should return 5', () => {
  expect(countItemsInSection()).to.equal(5)
})
