

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') setUsername(value);
    if (id === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace this with your actual login logic
    const user = await loginUser({ username, password });
    if (user.isAdmin) {
      navigate('/admin-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border border-gray-300 rounded box-border"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border border-gray-300 rounded box-border"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <a href="/registration" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

// Placeholder login function, replace with actual API call
async function loginUser({ username, password }) {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ isAdmin: username === 'admin' });
    }, 1000);
  });
}



