import { useState, useEffect } from "react"

import { ShopItem } from "./ShopItem"
import { Cart } from "./Cart"

import { Inventory } from "../store-items"

import { Titles, SortTypes } from "../utils/vars"

export const Shop = () => {

  const [cartItem, setCartItem] = useState(null)
  const [sortType, setSortType] = useState(SortTypes.price)  
  const [filters, setFilters] = useState({})
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {

    if (filters.hasOwnProperty(Inventory[0].type)) {

      const filtered = Inventory
        .filter(storeItem => filters[storeItem.type])
        .sort(sortFunctions[sortType])

      setFilteredItems(filtered)

    } else {

      const itemsFilter = {}
      Inventory.forEach(item => {
        itemsFilter[item.type] = true    
      })
      
      setFilters(itemsFilter)
    }

  }, [filters])

  const toggleFilter = (type) => {
    setFilters({ ...filters, [type]: !filters[type] })
  }

  const sortFunctions = {
      [SortTypes.price] : (a, b) => b.price - a.price,
      [SortTypes.name] : (a, b) => a.name.localeCompare(b.name)
  }                 

  return (
    <>
      <div id="store">
        
        <label htmlFor="sort">
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
          {
            Object.keys(filters).map((filter, index) => {
              return (
                <label
                  key={index} 
                  htmlFor={filter}
                >
                  <input
                    id={filter}
                    type="checkbox" 
                    checked={filters[filter]} 
                    onChange={() => toggleFilter(filter)}
                  />
                  Show {filter}
                </label>
            )})
          }
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