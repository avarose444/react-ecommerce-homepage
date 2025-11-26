import './App.css';
import { Link } from "react-router-dom";

function ProductItem({ id, name, category, imageUrl, price }) {
  const getImage = (url) => {
    return require(`${url}`);
  };

  return (
    <div className="product-item">

      <Link to={`/product/${id}`} className="product-thumb">
        <div className="overlay">
          <img src={getImage(imageUrl)} alt={name} />
        </div>
      </Link>

      <div className="product-info">
        <span className="category">{category}</span>

        <Link to={`/product/${id}`}>
          {name}
        </Link>

        <h4>${price}</h4>
      </div>

    </div>
  );
}

export default ProductItem;
