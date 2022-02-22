import './styles/reset.css'
import './styles/index.css'
import CartItem from './components/CartItem'
import StoreItem from './components/StoreItem/StoreItem'
import { useEffect, useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

export default function App() {
  const [store, setStore] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(obj => setStore(obj))
  }, [])

  console.log(store)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <StoreItem />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartItem />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
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
