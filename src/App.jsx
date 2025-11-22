import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import axios from 'axios';

function App() {

  const [page, setPage] = useState('home');
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const user = "ZG1203"
  
  useEffect(() => {
  const fetchRepos = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        const filteredRepos = response.data.filter(repo => {
          const name = repo.name.toLowerCase();
          return name.length >= 2 && name[0] === 'p' && !isNaN(parseInt(name[1])); 
        });
        setRepos(filteredRepos); //get list of repos with name begin with p followed a number - all resps for bootcamp assignment
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchRepos();
  }, []);

  const RepoClick = (repo) => {
    setSelectedRepo(repo);
    setPage('repo-detail');
  };

  // when select home, set selected repo to null
  const handleSetPage = (newPage) => {
    setPage(newPage);
    if (newPage === 'home') {
      setSelectedRepo(null); 
    }
  };

  return (
    <Layout selectedPage={page} onSetPage={handleSetPage} repos={repos} onRepoClick={RepoClick} selectedRepo={selectedRepo}>

      {page === 'home' && <HomePage onRepoClick={RepoClick} />}
      {page === 'repo-detail' && selectedRepo && (<ProjectDetailPage repo={selectedRepo} />)}

    </Layout>
  );
}

export default App;
