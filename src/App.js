import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ProductListing from './ProductListing';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';

const products = require('./products.json');



function App() {
  return (
    <div className="App">
      <Header />
      <ProductListing products = {products} /> 
      <Footer />
  </div>
  );
}

export default App;
