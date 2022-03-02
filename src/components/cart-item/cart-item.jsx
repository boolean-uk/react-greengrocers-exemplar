const CartItem = ({ cartItem, updateCartItem }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${cartItem.item.id}.svg`}
        alt={cartItem.item.name}
      />
      <p>{cartItem.item.name}</p>
      <button
        onClick={() =>
          updateCartItem({ ...cartItem, quantity: cartItem.quantity - 1 })
        }
        className="quantity-btn remove-btn center"
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        onClick={() =>
          updateCartItem({ ...cartItem, quantity: cartItem.quantity + 1 })
        }
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  )
}

export default CartItem
