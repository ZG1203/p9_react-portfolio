import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import axios from 'axios';

function App() {

  const [page, setPage] = useState('home');
  const [repos, setRepos] = useState([]);
  const user = "ZG1203"
  
  useEffect(() => {
  const fetchRepos = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        setRepos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <Layout selectedPage={page} onSetPage={setPage} repos={repos}>

      {page === 'home' && <HomePage />}

    </Layout>
  );
}

export default App;
