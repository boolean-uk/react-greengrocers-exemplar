import ItemImage from "./ItemImage"

function CartItem(props) {
  
  const { cartItem, decreaseQuantity, increaseQuantity } = props

  return (
    <li key={cartItem.item.id}>
      <ItemImage item={cartItem.item} className="cart--item-icon" />
      <p>{cartItem.item.name}</p>
      <button className="quantity-btn remove-btn center" onClick={() => decreaseQuantity(cartItem)}>
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button onClick={() => increaseQuantity(cartItem)} className="quantity-btn add-btn center">
        +
      </button>
    </li>
  )
}

export default CartItem
