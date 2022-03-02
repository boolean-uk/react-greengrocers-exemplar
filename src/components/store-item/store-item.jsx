export const StoreItem = ({item, addToCart}) => {
    return <li>
        <div className="store--item-icon">
            <img src={`/assets/icons/${item.id}.svg`} alt="beetroot" />
        </div>
        <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
}

export default StoreItem