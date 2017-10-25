'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.map( (thisCart) => {
          let total = thisCart.items.map( (a) => listedPrice(listings[listings.findIndex( x => x.name === a)])(a))
                      .reduce((a, c) => a + c)
          return { customer: thisCart.customer, total }
        }
      )
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
