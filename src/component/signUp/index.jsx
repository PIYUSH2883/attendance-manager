import React, { useState } from 'react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Save the credentials in local storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    setSuccessMessage(`Sign-up successful! Your details have been saved.`);
    navigate('/dashboard');
    
    // (Optional) Reset the input fields after signup
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Navbar  />
      
      <div className="min-h-screen bg-slate-400 flex items-center justify-center">
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
