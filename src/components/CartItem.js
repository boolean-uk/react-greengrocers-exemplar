export const CartItem = (props) => {
  
  const { cartItem, decreaseQuantity, increaseQuantity } = props

  return (
    <li>
      <img 
        className={'cart--item-icon' || ''} 
        src={`/assets/icons/${cartItem.item.id}.svg`} 
        alt={cartItem.name} 
      />
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
