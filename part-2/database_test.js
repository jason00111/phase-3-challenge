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
  done => {
    allItems().then(results => {
      expect(results).to.be.an('array').with.lengthOf(41)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('name')
      expect(results[0]).to.have.property('price')
      expect(results[0]).to.have.property('section')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)

it('itemsInSection("bulk") should return "Flour", "Pasta", and "Rice"',
  done => {
    itemsInSection('bulk').then(results => {
      expect(results).to.be.an('array').with.lengthOf(3)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('name')

      const names = results.map(result => result.name)
      expect(names).to.include('Flour')
      expect(names).to.include('Pasta')
      expect(names).to.include('Rice')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)

it('cheapItems() should return "Fish" as the first item and "Honey" as the last item',
  done => {
    cheapItems().then(results => {
      expect(results).to.be.an('array').with.lengthOf(25)
      expect(results[0]).to.have.property('id')
      expect(results[0]).to.have.property('price')

      expect(results[0].price).to.equal('$0.49')
      expect(results[results.length - 1].price).to.equal('$9.31')
      done()
    })
    .catch(err => {
      console.error(err)
      done()
    })
  }
)

it('countItemsInSection("packaged") should return 5', done => {
  countItemsInSection('packaged').then(result => {
    expect(result).to.be.a('string')
    expect(result).to.equal('5')
    done()
  })
  .catch(err => {
    console.error(err)
    done()
  })
})
