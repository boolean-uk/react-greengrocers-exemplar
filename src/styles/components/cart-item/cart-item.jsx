const CartItem = ({ cartItem }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${cartItem.item.id}.svg`}
        alt={cartItem.item.name}
      />
      <p>{cartItem.item.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">1</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default CartItem
