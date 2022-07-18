import { useState } from "react"

import { ShopItem } from "./ShopItem"
import { Cart } from "./Cart"

import { Inventory, ShopItemTypes } from "../store-items"

import { Titles, SortTypes } from "../utils/vars"

export const Shop = () => {

  const [cartItem, setCartItem] = useState(null)
  const [sortType, setSortType] = useState(SortTypes.price)
  
  const [filters, setFilters] = useState({
    [ShopItemTypes.veg]: true,
    [ShopItemTypes.fruit]: true,
  })

  const toggleFilter = (type) => {
    setFilters({ ...filters, [type]: !filters[type] })
  }

  const sortFunctions = {
      [SortTypes.price] : (a, b) => b.price - a.price,
      [SortTypes.name] : (a, b) => a.name.localeCompare(b.name)
  }

  const filteredItems = Inventory
    .filter(storeItem => filters[storeItem.type])
    .sort(sortFunctions[sortType])

  return (
    <>
      <div id="store">
        
        <label for="sort">
          {Titles.shopSort} 
          <select 
            id="sort"
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value={SortTypes.price}>{SortTypes.price}</option>
            <option value={SortTypes.name}>{SortTypes.name}</option>
          </select>
        </label>

        <div>
          <label for="filters">
            <input
              id="fruit"
              type="checkbox" 
              checked={filters[ShopItemTypes.fruit]} 
              onChange={() => toggleFilter(ShopItemTypes.fruit)}
            />
            Show fruit
          </label>
          <label for="veg">
            <input 
              id="veg"
              type="checkbox" 
              checked={filters[ShopItemTypes.veg]}
              onChange={() => toggleFilter(ShopItemTypes.veg)}
            />
            Show vegetables
          </label>
        </div>

        <ul className="item-list store--item-list">
          {filteredItems.map((item, index) => (
            <ShopItem 
              key={item.id} 
              item={item} 
              addItemToCart={setCartItem}
            />
          ))}
        </ul>

      </div>
      
      <Cart item={cartItem} />
    </>
  )
}