import React from 'react';
import Footer from './Footer';
import Header from './Header';

const pages = [
  { name: 'Home', key: 'home' },
]

const Layout = ({ children, selectedPage, onSetPage, repos=[] }) => {

  const renderPageLinks = () => {

    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }; 

  const renderRepoLinks = () => {
    if (!repos || repos.length === 0) {
      return <li>No projects available</li>;
    }

    return repos.map(repo => (
      <li key={repo.id} style={styles.repoItem} >
        <div>{repo.name}</div>
      </li>
    ));
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header />

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
          <div style={styles.repoSection}>
            <h4 style={styles.repoTitle}>Projects List</h4>
            <ul style={styles.repoList}>
              {renderRepoLinks()}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },
  repoItem: {
    padding: '8px 10px',
    marginBottom: '5px',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default Layout;
