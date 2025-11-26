import "./App.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails({ productsData, shoppingCart, handleAddToCart}) {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // find the matching product from the JSON file
  const product = productsData.find((item) => item.id === Number(productId));

  if (!product) {
    return <h1>Product not found.</h1>;
  }

  return (
    <section className="section product-detail">
      <div className="details container">
        <div className="left image-container">
          <div className="main">
            <img src={require(`./${product.image}`)} alt={product.name} />
          </div>
        </div>
        <div className="right">
          <span>
            <Link to="index.html">Home</Link> /
            <span className="category">{product.category}</span>
          </span>
          <h1>{product.name}</h1>
          <div className="price">${product.price}</div>
          <form className="form">
            <input
              type="number"
              min="0"
              value={quantity}
              onInput={(e) => setQuantity(e.target.value)}
            />
            <button
              type="button"   
              className="addCart"
              onClick={() => handleAddToCart(product, quantity)}
            >
              Add To Cart
            </button>
          </form>
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
