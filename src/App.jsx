import React from 'react';
import DevelopmentBanner from './components/DevelopmentBanner';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import { store } from './App/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* The Pro-Tip Logic Goes Here: */}
        {process.env.NODE_ENV !== 'production' && <DevelopmentBanner />}
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;