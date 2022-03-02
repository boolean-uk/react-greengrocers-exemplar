import CartItem from '../cart-item/cart-item'

const CartItemList = ({ cartItems, updateCartItem }) => {
  const cartItemList = cartItems.map((cartItem, i) => (
    <CartItem
      key={`cart-item-${i}`}
      cartItem={cartItem}
      updateCartItem={updateCartItem}
    />
  ))

  return <ul className="item-list cart--item-list">{cartItemList}</ul>
}

export default CartItemList
