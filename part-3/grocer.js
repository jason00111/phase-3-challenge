const cartButton = document.getElementById('cart-button')

const cartModal = document.getElementById('cart-modal')

const modalCloseButton = document.getElementById('modal-close-button')

const clearCartButton = document.getElementById('clear-cart-button')

const itemCountSpan = document.getElementById('cart-item-count')

const cartItemsUl = document.querySelectorAll('#cart-modal .item-section')[0]

const cartTotalSpan = document.getElementById('cart-total')

const addToCartButtons = document.querySelectorAll('.item button')

cartButton.addEventListener('click', () =>
  cartModal.style.visibility = 'visible'
)

modalCloseButton.addEventListener('click', () =>
  cartModal.style.visibility = 'hidden'
)

clearCartButton.addEventListener('click', () => {
  itemCountSpan.textContent = '0'
  while (cartItemsUl.firstChild)
    cartItemsUl.firstChild.remove()
  cartTotalSpan.textContent = '$0.00'
})

const addPrices = (price1, price2) => {
  const cents1 = Number(price1.slice(1)) * 100
  const cents2 = Number(price2.slice(1)) * 100
  const centsTotal = cents1 + cents2

  let result = '$'
  result = result.concat(Math.floor(centsTotal / 100))

  result = result.concat('.')

  const centsOnly = Math.round(centsTotal % 100)

  if (centsOnly < 10) result = result.concat('0')

  result = result.concat(centsOnly)

  return result
}

const addToCart = (itemName, itemPrice) => {
  const nameSpan = document.createElement('span')
  nameSpan.classList.add('item-name')
  nameSpan.textContent = itemName

  const priceSpan = document.createElement('span')
  priceSpan.classList.add('item-price')
  priceSpan.textContent = itemPrice

  const itemLi = document.createElement('li')
  itemLi.classList.add('item', 'flex', 'flex-row-between')
  itemLi.appendChild(nameSpan)
  itemLi.appendChild(priceSpan)

  cartItemsUl.appendChild(itemLi)

  const itemCount = Number(itemCountSpan.textContent)
  itemCountSpan.textContent = itemCount + 1

  const currentTotal = cartTotalSpan.textContent
  cartTotalSpan.textContent = addPrices(currentTotal, itemPrice)
}

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', event => {
    const itemName = event.target.parentElement
      .getElementsByClassName('item-name')[0].textContent
    const itemPrice = event.target.parentElement
      .getElementsByClassName('item-price')[0].textContent

    addToCart(itemName, itemPrice)
  })
}
