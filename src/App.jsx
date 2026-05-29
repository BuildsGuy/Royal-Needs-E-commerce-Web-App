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
        {/* Main responsive layout wrapper to catch and kill horizontal viewport breaks */}
        <div className="min-h-screen w-full flex flex-col bg-white overflow-x-hidden antialiased">
          
          {/* Conditional Development Banner */}
          {process.env.NODE_ENV !== 'production' && (
            <div className="w-full flex-shrink-0 z-50">
              <DevelopmentBanner />
            </div>
          )}
          
          {/* Global Header Navigation */}
          <Navbar />
          
          {/* Main dynamic route view layout region */}
          <main className="flex-grow w-full flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;