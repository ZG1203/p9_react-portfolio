import React from 'react';

const ProjectDetailPage = ({ repo }) => {
   console.log('Full repo:', repo);

  return (
    <div>
      <h2>Project Detail</h2>
      <h3>Project Name: {repo.name}</h3>
      <p>Date Created: {new Date(repo.created_at).toLocaleDateString()}</p>
      <p>Language: {repo.language}</p>
      <a href={repo.html_url} target="_blank" >Link to Github Repo</a>
    </div>
  );
};

export default ProjectDetailPage ;