const cartButton = document.getElementById('cart-button')

const cartModal = document.getElementById('cart-modal')

const modalCloseButton = document.getElementById('modal-close-button')

const addToCartButtons = document.querySelectorAll('.item button')

const itemCountSpan = document.getElementById('cart-item-count')

cartButton.addEventListener('click', () =>
  cartModal.style.visibility = 'visible'
)

modalCloseButton.addEventListener('click', () =>
  cartModal.style.visibility = 'hidden'
)
