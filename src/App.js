import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import ProductListing from './ProductListing';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const productsData = require('./products.json');

// Dummy cart data for Part 3 steps 7–9
const initialCart = [
  {
    id: 2,
    name: "Concepts Standard Backpack",
    price: 150,
    quantity: 2,
    thumbnail_image: "images/product-2-thumb.jpg",
  },
  {
    id: 3,
    name: "Sonata Triceratops Hoodie",
    price: 800,
    quantity: 1,
    thumbnail_image: "images/product-3-thumb.jpg",
  },
];

function App() {
  const [shoppingCart, setShoppingCart] = useState(initialCart);

  function handleAddToCart(item, quantity) {
    const parsedQuantity = Number(quantity);
    if (parsedQuantity <= 0 || Number.isNaN(parsedQuantity)) {
      return;
    }

    let newShoppingCart = [...shoppingCart];
    let foundIndex = -1;

    for (let i = 0; i < newShoppingCart.length; i++) {
      if (newShoppingCart[i].id === item.id) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      newShoppingCart[foundIndex].quantity += parsedQuantity;
    } else {
      newShoppingCart.push({ ...item, quantity: parsedQuantity });
    }

    setShoppingCart(newShoppingCart);
  }

  function handleRemoveFromCart(item, removeAll = false, quantity = 1) {
    const parsedQuantity = Number(quantity);
    if (parsedQuantity <= 0 || Number.isNaN(parsedQuantity)) {
      return;
    }

    let newShoppingCart = [...shoppingCart];
    let foundIndex = -1;

    for (let i = 0; i < newShoppingCart.length; i++) {
      if (newShoppingCart[i].id === item.id) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) {
      return;
    }

    if (removeAll) {
      // remove whole item
      newShoppingCart.splice(foundIndex, 1);
    } else {
      const currentQuantity = newShoppingCart[foundIndex].quantity;
      const newQuantity = currentQuantity - parsedQuantity;

      if (newQuantity <= 0) {
        newShoppingCart.splice(foundIndex, 1);
      } else {
        newShoppingCart[foundIndex].quantity = newQuantity;
      }
    }

    setShoppingCart(newShoppingCart);
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<ProductListing products={productsData} />}
        />

        <Route
          path="/product/:productId"
          element={
            <ProductDetails
              productsData={productsData}
              shoppingCart={shoppingCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              shoppingCart={shoppingCart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
