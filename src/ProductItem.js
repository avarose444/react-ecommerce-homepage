import './App.css';
function ProductItem({name, category, imageUrl, price}) {
    const getImage = (url) => {
        return require(`${url}`)
    }
    return (
         <div className="product-item">
          <a href="productDetails.html" className="product-thumb">
            <div className="overlay">
               <img src={getImage(imageUrl)} />
            </div>
          </a>
          <div className="product-info">
            <span className="category">{category}</span>
            <a href="productDetails.html">{name}</a>
            <h4>${price}</h4>
          </div>
        </div>
    );
}
export default ProductItem;