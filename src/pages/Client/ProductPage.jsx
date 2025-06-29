import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'

function ProductPage() {

    const [productsList, setProductsList] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [search, setSearch] = useState("")


    useEffect(() => {

        if(!productsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL +"/api/product/").then((response) => {
                setProductsList(response.data)
                setProductsLoaded(true)
            })
        }
        
            
    },[productsLoaded])

    function searchProducts() {
      if (search.length > 0) {
        axios.get(import.meta.env.VITE_BACKEND_URL + `/api/product/search?q=${search}`)
          .then((response) => {
            setProductsList(response.data.products);
          })
          .catch((error) => {
            console.error("Error fetching search results:", error);
          });
      } else {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/")
          .then((response) => {
            setProductsList(response.data.products);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      }
    }
    

  return (
    <div className="w-full h-full">
    <div className="w-full h-[70px] flex justify-center items-center">
      <div className="w-[50%] h-full flex justify-center items-center">
        <input 
          type="text" 
          placeholder="Search Products..." 
          className="w-full h-[40px] px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => {
            searchProducts();
            setProductsLoaded(false);
            
          }}
        >
          Search
        </button>
      </div>
    </div>
      {productsLoaded?
      <div className="w-full h-full flex flex-wrap justify-center ">
        {productsList.map((product,index) => {
            return(
               <ProductCard key={index} product={product} />
            )
            
        })}
      </div>
      :<div className="justify-center items-center"><Loader /></div>}
    </div>
  )
}

export default ProductPage
