import { Titles } from "../utils/vars"

export const ShopItem = ({item, addItemToCart}) => {

  return (
    <li>
      <div className="store--item-icon">
        <img 
          src={`/assets/icons/${item.id}.svg`} 
          alt={item.name} 
        />
      </div>

      <button 
        onClick={() => addItemToCart(item)}
      >
        {Titles.cartAdd}
      </button>
      
      <span>£{item.price.toFixed(2)}</span>
    </li>
  )
}
