import React from 'react';
import Footer from './Footer';
import Header from './Header';

const pages = [
  { name: 'Home', key: 'home' },
]

const Layout = ({ children, selectedPage, onSetPage, repos=[], onRepoClick, selectedRepo }) => {

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
      <li 
        key={repo.id} 
        style={{
          ...styles.repoItem,
          ...(selectedRepo && selectedRepo.id === repo.id ? styles.repoItemSelected : {}),
        }}
          onClick={()=> onRepoClick(repo)}
      >
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
          <ul style={styles.sidebarList}>
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
    padding: '5px 0px',
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
  sidebarList: {
    listStyle: 'none',
    padding: '0 15px',
    margin: 0,
  },
  sidebarLink: {
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    padding: '8px 10px',
    fontSize: '14px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  repoSection: {
    marginTop: '20px',
    padding: '0 15px', 
  },
  repoTitle: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  repoItem: {
    padding: '5px 5px',
    marginBottom: '5px',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    wordBreak: 'break-word',
  },
  repoList: {
    listStyleType: 'none',
    padding: 0,
  },
  repoItemSelected: {
    backgroundColor: '#999',
  },
};

export default Layout;
