import './App.css';
import CartItem from './CartItem';

function Cart({ shoppingCart, handleAddToCart, handleRemoveFromCart }) {
  const cartTotal = shoppingCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <div className="title">
        <h1>YOUR CART</h1>
      </div>

      <div className="cart-items-container">
        {shoppingCart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}

        {shoppingCart.length === 0 && (
          <div className="empty-cart-message">The cart is empty.</div>
        )}
      </div>

      <div className="total-container">
        <span id="cart-total-label">Total:</span>
        <span id="cart-total-dollar">$</span>
        <span id="cart-total-amount">{cartTotal}</span>
      </div>

      <div className="purchase-btn-container">
        <a href="" className="proceed-to-checkout">
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
}

export default Cart;
