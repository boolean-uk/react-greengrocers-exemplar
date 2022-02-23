import React from 'react'

const CartItem = ({ cartItem, updateCart }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${cartItem.id}.svg`}
        alt={cartItem.id}
      />
      <p>beetroot</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          cartItem.quantity--
          updateCart(cartItem)
        }}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        onClick={() => {
          cartItem.quantity++
          updateCart(cartItem)
        }}
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  )
}

export default CartItem
