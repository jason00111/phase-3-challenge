const pgp = require('pg-promise')()

const db = pgp({ database: 'grocery_store' })

const allItems = () => db.query('SELECT * FROM item')

const itemsInSection = section => db.query('SELECT id, name FROM item WHERE section = $1', section)

const cheapItems = () => db.query('SELECT id, price FROM item WHERE price < \'$10.00\' ORDER BY price')

const countItemsInSection = section => db.query('SELECT COUNT(*) FROM item WHERE section = $1', section).then(result => result[0].count)

const mostRecentOrders = () => db.query('SELECT id, creation_date FROM purchase ORDER BY creation_date DESC LIMIT 10')

const lastShopperName = () => db.query('SELECT shopper FROM purchase ORDER BY creation_date DESC LIMIT 1')
  .then(result => {
    if (result.length === 0) return null
    else return result[0].shopper
  })

const orderTotal = purchase_id => db.query('SELECT SUM(price) FROM item_purchase JOIN item ON item_id = item.id WHERE purchase_id = $1', purchase_id).then(result => result[0].sum)

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
}
