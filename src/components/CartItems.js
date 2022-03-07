import CartItem from './CartItem'

function CartItems(props) {

  const {cartItems, increaseQuantity, decreaseQuantity} = props

  return (
    <>
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {cartItems.map(cartItem => {
          return <CartItem cartItem={cartItem}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity} />
        })}
      </ul>
    </div>
    </>
  )
}

export default CartItems