const chai = require('chai')

const expect = chai.expect

const {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
} = require('./database.js')

it('allItems() should return all the itms\' id\'s, names, prices, and sections',
  () =>
    allItems().then(results => {
      expect(results).to.be.an('array').with.lengthOf(41)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('name')
      expect(results[0]).to.have.property('price')
      expect(results[0]).to.have.property('section')
    })
)

it('itemsInSection("bulk") should return "Flour", "Pasta", and "Rice"',
  () =>
    itemsInSection('bulk').then(results => {
      expect(results).to.be.an('array').with.lengthOf(3)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('name')

      const names = results.map(result => result.name)
      expect(names).to.include('Flour')
      expect(names).to.include('Pasta')
      expect(names).to.include('Rice')
    })
)

it('cheapItems() should return "Fish" as the first item and "Honey" as the last item',
  () =>
    cheapItems().then(results => {
      expect(results).to.be.an('array').with.lengthOf(25)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('price')

      expect(results[0].price).to.equal('$0.49')
      expect(results[results.length - 1].price).to.equal('$9.31')
    })
)

it('countItemsInSection("packaged") should return 5', () =>
  countItemsInSection('packaged').then(result => {
    expect(result).to.be.a('string')
    expect(result).to.equal('5')
  })
)

it('mostRecentOrders() finds the id\'s and order dates for the 10 most recent orders', () =>
  mostRecentOrders().then(results => {
    expect(results).to.be.an('array').with.lengthOf(3)
  })
)

it('lastShopperName() finds the shopper\'s name who made the most recent order', () =>
  lastShopperName().then(result => {
    expect(result).to.be.a('string')
    expect(result).to.equal('Steve')
  })
)

it('orderTotal(orderId) finds the total cost of an order', () =>
  orderTotal(3).then(result => {
    expect(result).to.be.a('string')
    expect(result).to.equal('$35.62')
  })
)
