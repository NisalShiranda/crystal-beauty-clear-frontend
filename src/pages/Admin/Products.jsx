import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom'

function Products() {

    const [products,setProducts] = useState([]);

    useEffect(
        () => {
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then((response) => {
                setProducts(response.data)
            })
        } , []
    )

    
        
        

  



  return (
    <>
      <div className="w-full h-full p-[10px] rounded-lg relative">
        <Link to="/admin/addproduct" className="text-[40px] absolute right-[50px] bottom-[30px] text-red-600 cursor-pointer hover:text-green-600">
          <IoMdAddCircle className="" />
        </Link>
        <table className="w-full table-auto border-collapse rounded-xl overflow-hidden shadow-lg text-center">
          <thead>
            <tr className="bg-red-600 text-white text-sm uppercase tracking-wide">
              <th className="px-4 py-3">Product ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Labeled Price</th>
              <th className="px-4 py-3">Stock</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {products.map((product, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-100 hover:bg-red-100 transition duration-200 cursor-pointer"
              >
                <td className="px-4 py-3 font-medium">{product.productID}</td>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3 text-green-600 font-semibold">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-3 line-through text-gray-500">
                  ${product.labeledPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products
