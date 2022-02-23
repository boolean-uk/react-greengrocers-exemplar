import React from 'react'

const StoreItem = ({ storeItem, addToCart }) => {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
      </div>
      <button onClick={() => addToCart(storeItem)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
