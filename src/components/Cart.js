import CartTotal from "./CartTotal"
import CartItems from "./CartItems"

function Cart(props) {

  const {cartItems, decreaseQuantity, increaseQuantity} = props

  return (
    <main id="cart">
      <CartItems cartItems={cartItems} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} />
      <CartTotal cartItems={cartItems} />
    </main>
  )
}

export default Cart