import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import storeItems from './store-items'
import Footer from './components/footer/footer'
import Cart from './components/cart-components/cart/cart'
import Store from './components/store-components/store/store'

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
      <Store storeItems={storeItems} addToCart={addToCart} />
      <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
      <Footer />
    </>
  )
}
