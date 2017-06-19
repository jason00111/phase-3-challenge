const chai = require('chai')

const expect = chai.expect

const { itemsInSection, cheapItems, countItemsInSection } = require('./database.js')

it('itemsInSection("bulk") should return "Flour", "Pasta", and "Rice"',
  done => {
    itemsInSection('bulk').then(results => {
      const names = results.map(result => result.name)
      expect(names).to.include('Flour')
      expect(names).to.include('Pasta')
      expect(names).to.include('Rice')
      done()
    })
  }
)

it('cheapItems() should return "Fish" as the first item and "Honey" as the last item',
  done => {
    cheapItems().then(results => {
      expect(results[0].price).to.equal('$0.49')
      expect(results[results.length - 1].price).to.equal('$9.31')
      done()
    })
  }
)

it('countItemsInSection() should return 5', done => {
  countItemsInSection().then(result => {
    expect(result).to.equal(5)
    done()
  })
})
