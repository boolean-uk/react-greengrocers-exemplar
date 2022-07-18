import { useState } from "react"

import { ShopItem } from "./ShopItem"

import { Inventory, ShopItemTypes } from "../store-items"

import { SortTypes } from "../utils/vars"

export const Shop = ({addItemToCart}) => {

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

  const filteredShopItems = Inventory
    .filter(storeItem => filters[storeItem.type])
    .sort(sortFunctions[sortType])

  return (
    <div id="store">
      <label>
        Sort 
        <select 
          onChange={(e) => setSortType(e.target.value)}
          value={sortType}
        >
          <option value={SortTypes.price}>Price</option>
          <option value={SortTypes.name}>Name</option>
        </select>
      </label>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={filters[ShopItemTypes.fruit]} 
            onChange={() => toggleFilter(ShopItemTypes.fruit)}
          />
          Show fruit
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={filters[ShopItemTypes.veg]}
            onChange={() => toggleFilter(ShopItemTypes.veg)}
          />
          Show vegetables
        </label>
      </div>
      <ul className="item-list store--item-list">
        {Inventory.map((item, index) => (
          <ShopItem 
            key={item.id} 
            item={item} 
            addItemToCart={addItemToCart}
          />
        ))}
      </ul>
    </div>
  )
}