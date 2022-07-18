import { useState, useEffect } from "react"

import { Shop } from "./components/Shop"
import { Cart } from "./components/Cart"

import { Titles } from "./utils/vars"

import "./styles/reset.css"
import "./styles/index.css"

export const App = ({cart}) => {

  const [cartItem, setCartItem] = useState(null)

  const addItemToCart = (item) => {
    setCartItem(item)
  }
  
  return (
    <>
      <header>
        <h1>{Titles.shopName}</h1>
      </header>

      <main>
        <Shop addItemToCart={addItemToCart} />
        <Cart item={cartItem} />
      </main>

      <footer>
        <p>{Titles.footer}</p>
      </footer>
    </>
  )
}
