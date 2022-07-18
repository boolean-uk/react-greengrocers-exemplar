import { Titles } from "../utils/vars"

export const CartTotal = (props) => {
  
  const { cartItems } = props

  const getTotal = () => {
    let total = 0
    for (const cartItem of cartItems) {
      total += cartItem.item.price * cartItem.quantity
    }

    return total.toFixed(2)
  }

  return (
    <div className="total-section">
      <div>
        <h3>{Titles.cartTotal}</h3>
      </div>
      <div>
        <span className="total-number">£{getTotal()}</span>
      </div>
    </div>
  )
}