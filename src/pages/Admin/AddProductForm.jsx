import React from 'react'
import { Link } from 'react-router-dom'

function AddProductForm() {
  return (
    <>
        <div className="w-full h-full bg-gray-100 rounded-lg justify-center items-center flex">
            <div className="bg-white shadow-lg w-[600px] h-[650px] rounded-lg flex flex-col justify-center items-center space-y-5 px-[30px]">
                <h1 className="text-[30px] font-semibold">Add Product</h1>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="text" placeholder='Product ID' ></input>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="text" placeholder='Product Name' ></input>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="text" placeholder='Alternative Names' ></input>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="price" placeholder='Price' ></input>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="labeledPrice" placeholder='Labeled Price' ></input>
                <textarea className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="description" placeholder='Description' ></textarea>
                <input className="w-full h-[40px] border border-black rounded-lg text-center text-black" type="stock" placeholder='Stock' ></input>
                <div className="flex space-x-5">
                    <Link to="/admin/products" className="w-[150px] h-[40px] bg-red-600 text-white rounded-lg hover:bg-red-700 text-center flex justify-center items-center">Cansel</Link>
                    <Link to="/admin/products" className="w-[150px] h-[40px] bg-green-600 text-white rounded-lg hover:bg-green-700 text-center flex justify-center items-center">Add Product</Link>

                </div>
            </div>
            
        </div>
    </>
  )
}

export default AddProductForm
