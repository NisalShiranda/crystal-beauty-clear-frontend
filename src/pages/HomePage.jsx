import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Client/ProductPage'
import ProductOverview from './Client/ProductOverview'
import CartPage from './Client/CartPage'
import Checkout from './Client/Checkout'
import ForgetPassword from './Client/ForgetPassword'

function HomePage() {
  return (
    <div className="w-full h-screen max-h-screen ">
      <Header />
      <div className="w-full h-[calc(100vh-70px)] min-h-[calc(100vh-70px)] border-t-2 ">
        <Routes path="/*">
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/*" element={<h1>404 Not Found Nisal</h1>} />
            <Route path="/overview/:id" element={<ProductOverview />} />
            <Route path="/contact" element={<h1>contact Us</h1>} />
            <Route path="/reviews" element={<h1>Reviews</h1>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            
        </Routes>
      </div>
    </div>
  )
}

export default HomePage
