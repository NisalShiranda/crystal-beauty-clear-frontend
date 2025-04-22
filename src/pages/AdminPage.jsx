import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import Products from './Admin/Products';
import AddProductForm from './Admin/AddProductForm';
import EditProduct from './Admin/EditProduct';
import RegisterPage from './Client/Register';

function AdminPage() {
  return (
    <>
        <div className="w-full h-screen bg-gray-200 flex py-2 pr-2">
            <div className="w-[300px] h-full py-[10px] px-[10px] space-y-5 flex flex-col items-center ">
            
                <Link to="/admin" className="px-[10px] py-[10px] border w-full rounded-lg flex items-center"><MdSpaceDashboard className="mr-2" />Dashboard</Link>
                <Link to="/admin/users" className="px-[10px] py-[10px] border w-full rounded-lg flex items-center "><FaUsers className="mr-2" />Users</Link>
                <Link to="/admin/products" className="px-[10px] py-[10px] border w-full rounded-lg flex items-center "><MdWarehouse className="mr-2" />Products</Link>
                <Link to="/admin/orders" className="px-[10px] py-[10px] border w-full rounded-lg flex items-center"><FaStore className="mr-2" />Orders</Link>

            </div>
            <div className="w-[calc(100vw-300px)] bg-white h-full rounded-lg">
                <Routes path="/*">
                    <Route path="/*" element={<h1>Dashboard</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/addproduct" element={<AddProductForm />} />
                    <Route path="/editproduct" element={<EditProduct/>} />
                    
                   
                </Routes>
            </div>
        </div>
    </>
  )
}

export default AdminPage
