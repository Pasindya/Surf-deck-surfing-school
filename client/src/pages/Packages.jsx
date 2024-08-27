import React from 'react';

export default function Packages() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Surfing Packages</h1>
      <p style={styles.subheading}>
        Choose the perfect package to match your surfing skills and ambitions.
      </p>
      <div style={styles.packagesContainer}>
        {packageData.map((pkg) => (
          <div
            key={pkg.id}
            style={styles.packageCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={pkg.image} alt={pkg.title} style={styles.packageImage} />
            <h2 style={styles.packageTitle}>{pkg.title}</h2>
            <p style={styles.packageDescription}>{pkg.description}</p>
            <p style={styles.packagePrice}>{pkg.price}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.detailsButton}>View Details</button>
              <button style={styles.bookButton}>Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const packageData = [
  {
    id: 1,
    title: 'Beginner Package',
    description:
      'Perfect for those who are new to surfing. Learn the basics and catch your first wave with our expert instructors.',
    price: '$199',
    image: 'https://example.com/beginner-package.jpg',
  },
  {
    id: 2,
    title: 'Intermediate Package',
    description:
      'Ideal for surfers looking to improve their skills and tackle more challenging waves.',
    price: '$299',
    image: 'https://example.com/intermediate-package.jpg',
  },
  {
    id: 3,
    title: 'Advanced Package',
    description:
      'Designed for experienced surfers aiming to master advanced techniques and conquer the biggest waves.',
    price: '$399',
    image: 'https://example.com/advanced-package.jpg',
  },
];

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: '48px',
    color: '#0a3d62',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '20px',
    color: '#3c6382',
    marginBottom: '40px',
  },
  packagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  packageCard: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    width: '320px',
    padding: '25px',
    textAlign: 'left',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  packageCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)',
  },
  packageImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  packageTitle: {
    fontSize: '26px',
    color: '#0a3d62',
    marginBottom: '12px',
  },
  packageDescription: {
    fontSize: '16px',
    color: '#576574',
    marginBottom: '20px',
    minHeight: '80px',
  },
  packagePrice: {
    fontSize: '24px',
    color: '#38ada9',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  detailsButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#54a0ff',
    color: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '48%',
  },
  bookButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1dd1a1',
    color: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '48%',
  },
};

// Adding hover effects for buttons
styles.detailsButton[':hover'] = { backgroundColor: '#2e86de' };
styles.bookButton[':hover'] = { backgroundColor: '#10ac84' };
