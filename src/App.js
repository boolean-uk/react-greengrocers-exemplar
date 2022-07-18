import { useState, useEffect } from "react"

import { Shop } from "./components/Shop"
import { Titles } from "./utils/vars"

import "./styles/reset.css"
import "./styles/index.css"

export const App = () => {

  return (
    <>
      <header>
        <h1>{Titles.shopName}</h1>
      </header>

      <main>
        <Shop />
      </main>

      <footer>
        <p>{Titles.footer}</p>
      </footer>
    </>
  )
}
