import './styles/reset.css'
import './styles/index.css'
import CartItem from './components/CartItem'
import StoreItem from './components/StoreItem'
import { useEffect, useState } from 'react'

export default function App() {
  const [store, setStore] = useState([])
  const [cart, setCart] = useState([])
  const [reRender, setReRender] = useState(false)
  const [basketTotal, setbasketTotal] = useState(0.0)

  const addToCart = storeItem => {
    storeItem.quantity = 1
    fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(storeItem)
    }).then(() => setReRender(true))
  }

  const updateCart = cartItem => {
    if (cartItem.quantity < 1) {
      return removeFromCart(cartItem.id)
    }
    fetch(`http://localhost:3001/cart/${cartItem.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    }).then(() => setReRender(true))
  }

  const removeFromCart = cartItem => {
    fetch(`http://localhost:3001/cart/${cartItem}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => setReRender(true))
  }

  const getStoreItems = () => {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(obj => setStore(obj))
  }

  const getCartItems = () => {
    fetch('http://localhost:3001/cart')
      .then(res => res.json())
      .then(obj => setCart(obj))
  }

  useEffect(() => {
    let total = 0
    cart.map(item => {
      total += item.price * item.quantity
    })
    setbasketTotal(total)
  }, [cart])

  useEffect(() => {
    getStoreItems()
    getCartItems()
    setReRender(false)
  }, [reRender])

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {store?.map(storeItem => {
            return (
              <StoreItem
                key={storeItem.id}
                storeItem={storeItem}
                addToCart={addToCart}
              />
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart?.map(cartItem => {
              return (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  updateCart={updateCart}
                />
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{basketTotal.toFixed(2)}</span>
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
