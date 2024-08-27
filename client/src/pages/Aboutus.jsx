import React from 'react';

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, Surf Enthusiast!</h1>
      <p style={styles.intro}>
        We're thrilled to welcome you to the Arugambay Surf-Deck family, where the ocean is our playground and every wave is an adventure.
      </p>
      <p style={styles.paragraph}>
        At <span style={styles.highlight}>Arugambay Surf-Deck</span>, our story began with a shared love for the ocean and a dream to create a place where everyone—no matter their skill level—could experience the joy of surfing. Our school is nestled in the heart of Arugambay, a place we proudly call home.
      </p>
      <p style={styles.paragraph}>
        Our team of passionate instructors isn't just here to teach you how to surf; we're here to share our love for the ocean, our stories of adventure, and our belief that surfing is more than just a sport—it's a way of life. Every lesson is crafted with care, tailored to help you find your own rhythm on the waves.
      </p>
      <p style={styles.paragraph}>
        We believe in creating lasting memories and building a community where every surfer, from beginner to pro, feels like they belong. We can’t wait to meet you, share some laughs, catch some waves, and help you discover the magic of surfing at Arugambay Surf-Deck.
      </p>
      <div style={styles.imageContainer}>
        <img src="path-to-your-image.jpg" alt="Surfers enjoying a day at Arugambay" style={styles.image} />
      </div>
      <p style={styles.signature}>See you on the waves,<br/>The Arugambay Surf-Deck Team</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#2C3E50',
    lineHeight: '1.8',
    backgroundColor: '#F7F9FA',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'left',
  },
  heading: {
    color: '#1E4A54',
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '15px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
  },
  intro: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#3A7A7D',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  highlight: {
    color: '#1E4A54',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: '25px',
    textAlign: 'center',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  image: {
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
  },
  signature: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginTop: '30px',
    textAlign: 'center',
    color: '#1E4A54',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};
