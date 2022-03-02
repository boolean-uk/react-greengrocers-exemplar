import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import StoreItem from './components/store-item/store-item'
import CartItem from './components/cart-item/cart-item'
import storeItems from './store-items'

const initialStoreItems = storeItems

export default function App() {
  const [storeItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const isInCart = item => {
    return cartItems.findIndex(cItem => cItem.item.id === item.id) !== -1
  }

  const addToCart = item => {
    if (isInCart(item)) {
      return
    }
    const cartItem = { item: item, quantity: 1 }
    setCartItems(cartItems => [...cartItems, cartItem])
  }

  const updateCartItem = updatedCartItem => {
    setCartItems(currentCart => {
      const updatedCart = currentCart
        .map(cartItem => {
          if (cartItem.item.id === updatedCartItem.item.id) {
            if (updatedCartItem.quantity === 0) {
              return null
            }
            return updatedCartItem
          }
          return cartItem
        })
        .filter(cartItem => cartItem !== null)
      return updatedCart
    })
  }

  const storeItemList = storeItems.map((item, i) => (
    <StoreItem key={`store-item-${i}`} item={item} addToCart={addToCart} />
  ))

  const cartItemList = cartItems.map((cartItem, i) => (
    <CartItem
      key={`cart-item-${i}`}
      cartItem={cartItem}
      updateCartItem={updateCartItem}
    />
  ))

  const total = cartItems.reduce((sum, cartItem) => sum += cartItem.item.price * cartItem.quantity, 0)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">{storeItemList}</ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">{cartItemList}</ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{total.toFixed(2)}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
