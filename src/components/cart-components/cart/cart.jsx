import CartItemList from '../cart-item-list/cart-item-list'
import Total from '../total/total'

const Cart = ({ cartItems, updateCartItem }) => {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <CartItemList cartItems={cartItems} updateCartItem={updateCartItem} />
      </div>
      <Total cart={cartItems} />
    </main>
  )
}

export default Cart
