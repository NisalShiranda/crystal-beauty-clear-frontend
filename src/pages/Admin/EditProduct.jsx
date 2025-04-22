import React, {useState} from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import mediaUpload from '../../../utils/MediaUpload';

function EditProduct() {


  const locationData = useLocation()
  console.log(locationData.state)
  const navigate = useNavigate();
  if(locationData.state == null){
    toast.error("Please select a product to edit")
    window.location.href = "/admin/products"
    
  }
  const [productId, setProductId] = useState(locationData.state.productID);
  const [productName, setProductName] = useState(locationData.state.name);
  const [alternativeNames, setAlternativeNames] = useState(locationData.state.altNames.join(","));
  const [price, setPrice] = useState(locationData.state.price);
  const [labeledPrice, setLabeledPrice] = useState(locationData.state.labeledPrice);
  const [description, setDescription] = useState(locationData.state.description);
  const [images, setImages] = useState([]);
  const [stock, setStock] = useState(locationData.state.stock);
  

  async function handleSubmit() {

    const promiseArray = []

    for(let i=0; i<images.length; i++){
      const promise = mediaUpload(images[i])
      promiseArray.push(promise)
      

    }

    try {

    let result = await Promise.all(promiseArray)
    
    if(images.length == 0){
        result = locationData.state.images
    }


    
    

    const altNamesInArray = alternativeNames.split(",");

    const productData = {
      
      name: productName,
      altNames: altNamesInArray,
      price: price,
      labeledPrice: labeledPrice,
      description: description,
      images : result,
      stock: stock
    }

    const token = localStorage.getItem("token")

    console.log(token)

    

    await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/product/"+productId, productData,{
      headers: {
        "Authorization" : "Bearer "+token
      }
    })

    toast.success("Product Updated Successfully");
    navigate("/admin/products");
 

  }catch (error){
    console.log(error)
    toast.error("Product Updating Failed")
    
  }
  
  }

  return (
    <>
      <div className="w-full h-full bg-gray-100 rounded-lg justify-center items-center flex">
        <div className="bg-white shadow-lg w-[600px] h-[650px] rounded-lg flex flex-col justify-center items-center space-y-5 px-[30px]">
          <h1 className="text-[30px] font-semibold">Edit Product</h1>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="text"
            disabled
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          ></input>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          ></input>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="text"
            placeholder="Alternative Names"
            value={alternativeNames}
            onChange={(e) => setAlternativeNames(e.target.value)}
          ></input>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="number"
            placeholder="Labeled Price"
            value={labeledPrice}
            onChange={(e) => setLabeledPrice(e.target.value)}
          ></input>

          <textarea
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input 
            type="file"
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            placeholder="Image"
            onChange={(e) => setImages(e.target.files)}
            multiple
          ></input>

          <input
            className="w-full h-[40px] border border-black rounded-lg text-center text-black"
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          ></input>

          <div className="flex space-x-5">
            <Link
              to="/admin/products"
              className="w-[150px] h-[40px] bg-red-600 text-white rounded-lg hover:bg-red-700 text-center flex justify-center items-center"
            >
              Cancel
            </Link>
            <Link
              
              className="w-[150px] h-[40px] bg-green-600 text-white rounded-lg hover:bg-green-700 text-center flex justify-center items-center"
              onClick={handleSubmit}
            >
              Update
            </Link>

            
          </div>

          
          
        </div>
      </div>
    </>
  );
}

export default EditProduct
