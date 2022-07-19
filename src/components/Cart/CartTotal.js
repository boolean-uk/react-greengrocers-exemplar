function CartTotal(props) {
  
  const { cartItems } = props

  const totalCost = () => {
    let total = 0
    for (const cartItem of cartItems) {
      total += cartItem.item.price * cartItem.quantity
    }

    return total.toFixed(2)
  }

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{totalCost()}</span>
      </div>
    </div>
  )
}

export default CartTotal