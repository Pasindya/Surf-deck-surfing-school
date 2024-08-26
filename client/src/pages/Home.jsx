import React from 'react';

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Roboto', sans-serif", // Changed to a more casual font
      color: '#444',
      backgroundColor: '#f4f4f4', // Slightly different background color
      padding: '20px',
      borderRadius: '10px', // Less rounded corners
      maxWidth: '1000px', // Reduced max width
      margin: '20px auto',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.6',
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/surfing-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        borderRadius: '10px', // Less rounded corners
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        marginBottom: '20px',
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '15px', letterSpacing: '1.5px', fontWeight: '700' }}>
          The Best Surfing School <span style={{ color: '#FFD700' }}>In Sri Lanka</span>
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '750px', margin: '0 auto', fontStyle: 'italic' }}>
          Join our vibrant community and experience the thrill of surfing in the stunning waters of Arugambay.
        </p>
      </div>

      <br />

      {/* Call to Action */}
      <div style={{ textAlign: 'center', margin: '25px 0' }}>
        <h2 style={{ color: '#007BFF', fontSize: '24px', fontWeight: '600' }}>
          Freedom is a flexible surf camp. Book your surf lessons today!
        </h2>
      </div>

      <br />

      {/* Image Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        position: 'relative',
      }}>
        <img src='/images/p2.jpg' alt="home pic" style={{
          borderRadius: '10px', // Less rounded corners
          maxHeight: '350px', // Reduced max height
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease',
          overflow: 'hidden',
          border: '2px solid #ddd', // Added border for a handmade feel
        }} />
      </div>

      {/* Description Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px', // Less rounded corners
        lineHeight: '1.8',
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      }}>
        <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
          Since our establishment in 2015, we have been dedicated to nurturing the passion 
          for surfing in the beautiful waters of Arugambay. Whether you're a beginner catching your first wave or an experienced surfer, we offer personalized lessons to suit every level.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Explore our vibrant surfing community, book lessons with top instructors, and stay updated with the latest 
          events and courses. We are committed to providing a safe, fun, and enriching environment for all our students.
        </p>
      </div>

      {/* Join Us Section */}
      <h2 style={{ textAlign: 'center', margin: '15px 0', color: '#e94560', fontSize: '24px', letterSpacing: '0.5px' }}>
        Join us and ride the waves with confidence!
      </h2>

      <div style={{ textAlign: 'center' }}>
        <button style={{
          padding: '12px 30px',
          backgroundColor: '#FFD700',
          color: '#333',
          borderRadius: '30px',
          border: '2px solid #333', // Added border for a handmade feel
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '18px',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#FFC107';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#FFD700';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          Join Us
        </button>
      </div>
    </div>
  );
}
