import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 ZG. All rights reserved.</p>
    </footer>
  )
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  
};

export default Footer