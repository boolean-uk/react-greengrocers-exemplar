import React from 'react'

const CartItem = () => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src="assets/icons/001-beetroot.svg"
        alt="beetroot"
      />
      <p>beetroot</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">1</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default CartItem
