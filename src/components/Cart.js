import React, { useState, useEffect } from "react"

import { CartTotal } from "./CartTotal"
import { CartItem } from "./CartItem"

import { Titles } from "../utils/vars"

export const Cart = (props) => {

  const {item} = props

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {

    if (item) {
      addItemToCart(item)
    }

  }, [item])

  const addItemToCart = (item) => {
    const existingCartItem = cartItems.find((existing) => existing.item === item)
    if (existingCartItem !== undefined) {
      increaseQuantity(existingCartItem)
    } else {
      setCartItems([...cartItems, { item: item, quantity: 1 }])
    }
  }

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

  const removeItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((existingCartItem) => cartItem != existingCartItem))
  }

  return (
    <div id="cart">
      <h2>{Titles.cartHeader}</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map(cartItem => (
            <CartItem 
              key={cartItem.item.id}
              cartItem={cartItem}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </ul>
      </div>
      <CartTotal cartItems={cartItems} />
    </div>
  )
}