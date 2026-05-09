import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

const url = "https://api.github.com/users/gauri2806/repos";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (Array.isArray(data)) {
          const sortedRepos = data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setRepos(sortedRepos)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchRepos()
  }
    , [])
  return (
    <>
      <Box
        className="w-full flex flex-wrap justify-center gap-8 px-6 py-10"
      >
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </Box>
    </>
  );
};

export default Projects;
