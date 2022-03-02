const Total = ({ cart }) => {
  const total = cart.reduce(
    (sum, cartItem) => (sum += cartItem.item.price * cartItem.quantity),
    0
  )
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Total
