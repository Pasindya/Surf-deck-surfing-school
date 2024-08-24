import React, { useState } from 'react';

export default function Support() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#e0f7fa', // Light turquoise
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      color: '#00796b', // Darker teal for text
      fontFamily: "'Roboto', sans-serif"
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#00796b', // Darker teal
        marginBottom: '20px',
        fontSize: '28px',
        borderBottom: '2px solid #00796b',
        paddingBottom: '10px'
      }}>
        Contact Our Support
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ color: '#004d40' }}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #b2dfdb', // Light teal border
              backgroundColor: '#ffffff',
              color: '#00796b',
              fontSize: '16px'
            }}
          />
        </div>

        <div>
          <label style={{ color: '#004d40' }}>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #b2dfdb',
              backgroundColor: '#ffffff',
              color: '#00796b',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ color: '#004d40' }}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #b2dfdb',
                backgroundColor: '#ffffff',
                color: '#00796b',
                fontSize: '16px'
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ color: '#004d40' }}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #b2dfdb',
                backgroundColor: '#ffffff',
                color: '#00796b',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ color: '#004d40' }}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #b2dfdb',
              backgroundColor: '#ffffff',
              color: '#00796b',
              fontSize: '16px'
            }}
          />
        </div>

        <div>
          <label style={{ color: '#004d40' }}>Your Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #b2dfdb',
              backgroundColor: '#ffffff',
              color: '#00796b',
              fontSize: '16px',
              height: '120px'
            }}
          />
        </div>

        <button type="submit" style={{
          padding: '15px 25px',
          backgroundColor: '#00796b', // Dark teal
          color: '#ffffff',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: 'background-color 0.3s ease',
          marginTop: '10px'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}
