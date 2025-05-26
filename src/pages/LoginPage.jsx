import React, { useState } from 'react'
import { MdSentimentSatisfiedAlt } from 'react-icons/md'
import axios from 'axios'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { GrGoogle } from 'react-icons/gr';

function LoginPage() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const loginWithGoogle = useGoogleLogin(
    {
      onSuccess: (res) => {
        console.log(res)
        setLoading(true)
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/google",{accessToken: res.access_token}).then((res) => {
          console.log("Google Login Successful", res.data)
          toast.success("Google Login Successful")
          localStorage.setItem("token", res.data.token)

          const user = res.data.user;

          if(user.role === "admin"){
              // window.location.href = "/admin"
              navigate("/admin")
          }else{
              // window.location.href = "/"
              navigate("/")
          }
          setLoading(false)
        })
      }
    }
    )

  function handleLogin() {

    
    setLoading(true)
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
      setLoading(false)

    }).catch((error) => {
      console.log("Login Failed", error.response.data)
      toast.error(error.response.data.message || "Login Failed")
      setLoading(false)
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
            <button onClick={handleLogin} className="w-full h-[50px] bg-amber-100 rounded-xl text-black cursor-pointer">{loading?"Loading...":"Login"}</button>

            <button className="w-full h-[50px] bg-amber-100 rounded-xl text-black cursor-pointer flex items-center justify-center" 
            onClick={loginWithGoogle}>
           
            <GrGoogle className="mr-[10px]"/>
            {
              loading?"Loading...":"Login with Google"
            }
            </button>

            <p>Don`t have account yet? <Link to="/register">Register Now</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
