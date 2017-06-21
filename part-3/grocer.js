const cartButton = document.getElementById('cart-button')

const cartModal = document.getElementById('cart-modal')

const modalCloseButton = document.getElementById('modal-close-button')

const clearCartButton = document.getElementById('clear-cart-button')

const itemCountSpan = document.getElementById('cart-item-count')

const cartItemSection = document.querySelectorAll('#cart-modal .item-section')[0]

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
  while (cartItemSection.firstChild)
    cartItemSection.firstChild.remove()
  cartTotalSpan.textContent = '0'
})
