import './App.css';

function CartItem({ item, handleAddToCart, handleRemoveFromCart }) {
  const getImage = (url) => {
    return require(`${url}`);
  };

  console.log("CartItem item:", item);

  return (
    <div className="cart-item">
      <div className="delete-btn-container">
        <span
          className="delete-btn"
          onClick={() => handleRemoveFromCart(item, true)}
        ></span>
      </div>

      <div className="image">
        <img src={getImage(`./${item.thumbnail_image}`)} />
      </div>

      <div className="description">
        <span>{item.name}</span>
      </div>

      <div className="quantity">
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => handleRemoveFromCart(item, false, 1)}
        >
          <img src={require("./images/minus.svg").default} />
        </button>

        <input
          type="text"
          name="name"
          value={item.quantity}
          readOnly
        />

        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => handleAddToCart(item, 1)}
        >
          <img src={require("./images/plus.svg").default} />
        </button>
      </div>

      <div className="cart-item-price">
        $
        <span className="price-amount">
          {item.price * item.quantity}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
