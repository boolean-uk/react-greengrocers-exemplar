import './styles/reset.css'
import './styles/index.css'
import { useEffect, useState } from 'react'
import StoreItem from './styles/components/store-item/store-item'
import CartItem from './styles/components/cart-item/cart-item'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
{
  item: {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  quantity: 1
}
*/

const initialStoreItems = []

const getStoreItems = () => {
  return fetch('http://localhost:3001/items').then(res => res.json())
}

const getCartItems = () => {
  return fetch('http://localhost:3001/cart').then(res => res.json())
}

const addItemToCart = cartItem => {
  return fetch('http://localhost:3001/cart', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(cartItem)
  }).then(res => res.json())
}

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  
  useEffect(() => {
    if(!shouldFetch) {
      return
    }
    console.log('fetching')
    getStoreItems().then(items => setStoreItems(items))
    getCartItems().then(cartItems => setCartItems(cartItems))
    setShouldFetch(false)
  }, [shouldFetch])

  const isInCart = item => {
    return cartItems.findIndex(cItem => cItem.item.id === item.id) !== -1
  }

  const addToCart = item => {
    if (isInCart(item)) {
      return
    }
    const cartItem = { item: item, quantity: 1 }
    addItemToCart(cartItem).then(() => setShouldFetch(true))
  }

  const storeItemList = storeItems.map((item, i) => (
    <StoreItem key={`store-item-${i}`} item={item} addToCart={addToCart} />
  ))

  const cartItemList = cartItems.map((cartItem, i) => (
    <CartItem key={`cart-item-${i}`} cartItem={cartItem} />
  ))

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
