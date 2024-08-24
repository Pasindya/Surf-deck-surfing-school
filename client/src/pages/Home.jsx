import React from 'react';

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '15px',
      maxWidth: '1200px',
      margin: '20px auto',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/surfing-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        borderRadius: '15px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
      }}>
        <h1 className="text-3xl lg:text-6xl font-bold" style={{ fontSize: '48px', marginBottom: '20px', letterSpacing: '1px' }}>
          The Best Surfing School <span style={{ color: '#FFD700' }}>In Sri Lanka</span>
        </h1>
        <p style={{ fontSize: '24px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Join our vibrant community and experience the thrill of surfing in the stunning waters of Arugambay.
        </p>
      </div>

      <br />

      {/* Call to Action */}
      <div className="text-2xl" style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2 className="font-semibold" style={{ color: '#007BFF', fontSize: '28px' }}>
          Freedom is a flexible surf camp. Book your surf lessons today!
        </h2>
      </div>

      <br />

      {/* Image Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
        position: 'relative',
      }}>
        <img src='/images/p2.jpg' alt="home pic" style={{
          borderRadius: '15px',
          maxHeight: '400px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease',
          overflow: 'hidden',
        }} />
      </div>

      {/* Description Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '15px',
        lineHeight: '1.8',
        fontSize: '20px',
        color: '#555',
        marginBottom: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
          Since our establishment in 2015, we have been dedicated to nurturing the passion 
          for surfing in the beautiful waters of Arugambay. Whether you're a beginner catching your first wave or an experienced surfer, we offer personalized lessons to suit every level.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Explore our vibrant surfing community, book lessons with top instructors, and stay updated with the latest 
          events and courses. We are committed to providing a safe, fun, and enriching environment for all our students.
        </p>
      </div>

      {/* Join Us Section */}
      <h2 className="font-semibold text-xl" style={{ textAlign: 'center', margin: '20px 0', color: '#e94560', fontSize: '26px', letterSpacing: '0.5px' }}>
        Join us and ride the waves with confidence!
      </h2>

      <div style={{ textAlign: 'center' }}>
        <button className='Joinus-btn' style={{
          padding: '15px 40px',
          backgroundColor: '#FFD700',
          color: '#333',
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '20px',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
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
