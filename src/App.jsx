import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/AdminPage'
import Login from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import ImageUploadTesting from './pages/Admin/ImageUploadTesting'
import RegisterPage from './pages/Client/Register'
import HomePage from './pages/HomePage'
import Checkout from './pages/Client/Checkout'

function App() {
  

  return (
    <>
     
     <BrowserRouter>
     <Toaster position="top-right" />
        <Routes path="/*">
          <Route path="/*" element={<HomePage/>} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<>404 Not Found</>} />
          <Route path="/testingImage" element={<ImageUploadTesting />}/>
          <Route path="/register" element={<RegisterPage />} />
         
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
