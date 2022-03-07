import ItemImage from './ItemImage'

function StoreItem(props) {
  return (
    <li>
      <div className="store--item-icon">
        <ItemImage item={props.storeItem} />
      </div>
      <button onClick={() => props.addItemToCart(props.storeItem)}>Add to cart</button>
      <span>£{props.storeItem.price.toFixed(2)}</span>
    </li>
  )
}

export default StoreItem
