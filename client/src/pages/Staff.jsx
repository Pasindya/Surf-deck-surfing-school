import React, { useState } from 'react';

export default function StaffLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
      fontFamily: 'Arial, sans-serif',
    }}>
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '350px',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff', // White background for the form
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '20px',
        }}>Staff Login - Arugambay</h2>
        <label htmlFor="username" style={{
          marginBottom: '10px',
          color: '#555',
        }}>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
          }}
        />
        <label htmlFor="password" style={{
          marginBottom: '10px',
          color: '#555',
        }}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
          }}
        />
        <button type="submit" style={{
          padding: '12px',
          borderRadius: '5px',
          border: 'none',
          background: '#6a11cb',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}>Login</button>
      </form>
    </div>
  );
}
