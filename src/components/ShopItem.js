import { useState } from "react"

import { Titles } from "../utils/vars"

export const ShopItem = ({item, addItemToCart}) => {

  const [showInfo, setShowInfo] = useState(false)

  const close = () => {
    setShowInfo(false)
  }

  const open = () => {
    setShowInfo(true)
  }

  return (
    <>
      { showInfo ? (

        <div className="modal">
          <div>
            {item.description}
          </div>
          <button type="button" onClick={close}>
            Close
          </button>
        </div>

      ) : (

        <li>
          <div className="store--item-icon">
            <button type="button" onClick={open}>
              <img 
                src={`/assets/icons/${item.id}.svg`} 
                alt={item.name} 
              />
            </button>
          </div>

          <button 
            onClick={() => addItemToCart(item)}
          >
            {Titles.cartAdd}
          </button>
          
          <span>£{item.price.toFixed(2)}</span>
        </li>

      )}
    </>
  )
}
