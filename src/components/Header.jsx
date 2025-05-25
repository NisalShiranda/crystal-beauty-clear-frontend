import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="w-full h-[70px]  flex justify-center items-center relative  ">
            <div className=" w-[50%] h-full flex justify-evenly items-center text-xl  ">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/cart" className="
               text-3xl"><TiShoppingCart className="absolute right-[30px] top-[20px] text-center" /></Link>
            </div>
        </div>
    </>
  )
}

export default Header
