import StoreItem from "./StoreItem"

function StoreItems(props) {
  return (
    <ul className="item-list store--item-list">
      {props.storeItems.map((storeItem) => (
        <StoreItem key={storeItem.id} storeItem={storeItem} addItemToCart={props.addItemToCart} />
      ))}
    </ul>
  )
}

export default StoreItems
