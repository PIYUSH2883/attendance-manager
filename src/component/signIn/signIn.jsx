import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      setErrorMessage('');
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSignIn}>
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
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
