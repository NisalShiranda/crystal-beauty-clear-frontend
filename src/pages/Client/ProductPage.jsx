import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'

function ProductPage() {

    const [productsList, setProductsList] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(false)


    useEffect(() => {

        if(!productsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL +"/api/product").then((response) => {
                setProductsList(response.data)
                setProductsLoaded(true)
            })
        }
        
            
    },[productsLoaded])

  return (
    <div className="w-full h-full">
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
