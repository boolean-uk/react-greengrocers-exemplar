import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import storeItems from './store-items'
import StoreItemList from './components/store/store-item-list/store-item-list'
import Footer from './components/footer/footer'
import Cart from './components/cart-components/cart/cart'

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

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <StoreItemList storeItems={storeItems} addToCart={addToCart} />
      </header>
      <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
      <Footer />
    </>
  )
}
