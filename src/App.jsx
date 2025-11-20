import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
// import axios from 'axios';

function App() {

  const [page, setPage] = useState('home');


  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'project' && <ProjectDetailPage />}

    </Layout>
  );
}

export default App;
