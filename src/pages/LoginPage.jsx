import React, { useState } from 'react'
import { MdSentimentSatisfiedAlt } from 'react-icons/md'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin() {

    console.log("Email: ", email)
    console.log("Password: ", password)

    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",
      {email: email,
      password: password
    }).then((response) => {

      console.log("Login Succefull", response.data)
      toast.success("Login Successful")
      localStorage.setItem("token", response.data.token)

      const user = response.data.user;

      if(user.role === "admin"){
          // window.location.href = "/admin"
          navigate("/admin")
      }else{
          // window.location.href = "/"
          navigate("/")
      }

    }).catch((error) => {
      console.log("Login Failed", error.response.data)
      toast.error(error.response.data.message || "Login Failed")
    })

    console.log("Login button clicked")
  }


  return (
    <>
      <div className="w-full h-screen bg-[url(/loginBg.jpg)] bg-cover bg-center flex" >
        <div className="w-[50%] h-full border border-white"></div>
        <div className="w-[50%] h-full  border  p-[100px] flex justify-center items-center">
          <div className=" w-full h-full backdrop-blur-xl shadow-xl rounded-3xl px-[20px] flex flex-col justify-center items-center space-y-[30px]">

            <input onChange={
              (e) => {
                setEmail(e.target.value)

            }} 
            
            className="w-full h-[50px] border border-white rounded-xl text-center text-white" type="email" placeholder='Email' ></input>

            <input onChange={
              (e) => {
                setPassword(e.target.value)

            }} 
            
            className="w-full h-[50px] border border-white rounded-xl text-center text-white" type="password" placeholder='Password' ></input>
            <button onClick={handleLogin} className="w-full h-[50px] bg-amber-100 rounded-xl text-black cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
