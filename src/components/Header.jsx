import React from 'react';

const Header = () => {
  return (
    <nav style={styles.header}>
        <h1>My BootCamp Github Repos</h1>
      </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header