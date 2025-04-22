import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Basic frontend validation
    if (
      !firstName.trim() || !lastName.trim() || !email.trim() ||
      !phone.trim() || !password || !confirmPassword
    ) {
      toast.error('Please fill in all the fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/user/',
        {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          phone,
        }
      );

      toast.success('Registration successful! You can now log in.');
      navigate('/login');
    } catch (error) {
      console.log('Registration Failed', error.response?.data || error);
      toast.error(error.response?.data?.message || 'Registration Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[url(/loginBg.jpg)] bg-cover bg-center flex">
      <div className="w-[50%] h-full border border-white"></div>
      <div className="w-[50%] h-full border p-[100px] flex justify-center items-center">
        <div className="w-full h-full backdrop-blur-xl shadow-xl rounded-3xl px-[20px] flex flex-col justify-center items-center space-y-[20px]">
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-[50px] border border-white rounded-xl text-center text-white"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={handleRegister}
            className="w-full h-[50px] bg-amber-100 rounded-xl text-black cursor-pointer"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <p>
            Already have an account? <Link to="/login">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
