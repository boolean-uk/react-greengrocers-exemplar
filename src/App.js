import "./styles/reset.css"
import "./styles/index.css"

import { useState } from "react"

import Store from "./components/Store/Store"
import Cart from "./components/Cart/Cart"
import Footer from "./components/Footer"

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const increaseQuantity = (cartItem) => {
    cartItem.quantity++
    setCartItems([...cartItems])
  }

  const decreaseQuantity = (cartItem) => {
    if (cartItem.quantity === 1) {
      removeItemFromCart(cartItem)
    } else {
      cartItem.quantity--
      setCartItems([...cartItems])
    }
  }

  const addItemToCart = (item) => {
    const existingCartItem = cartItems.find((existing) => existing.item === item)
    if (existingCartItem !== undefined) {
      increaseQuantity(existingCartItem)
    } else {
      setCartItems([...cartItems, { item: item, quantity: 1 }])
    }
  }

  const removeItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((existingCartItem) => cartItem != existingCartItem))
  }

  return (
    <>
      <Store addItemToCart={addItemToCart} />
      <Cart cartItems={cartItems} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} />
      <Footer />
    </>
  )
}
