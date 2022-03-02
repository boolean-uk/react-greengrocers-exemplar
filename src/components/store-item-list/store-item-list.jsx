import StoreItem from '../store-item/store-item'

const StoreItemList = ({ storeItems, addToCart }) => {
  const itemList = storeItems.map((item, i) => (
    <StoreItem key={`store-item-${i}`} item={item} addToCart={addToCart} />
  ))

  return <ul className="item-list store--item-list">{itemList}</ul>
}

export default StoreItemList
