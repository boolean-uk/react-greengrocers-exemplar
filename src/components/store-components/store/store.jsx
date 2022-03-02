import StoreItemList from '../store-item-list/store-item-list'

const Store = ({ storeItems, addToCart }) => {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreItemList storeItems={storeItems} addToCart={addToCart} />
    </header>
  )
}

export default Store
