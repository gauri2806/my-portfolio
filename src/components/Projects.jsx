import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectPagination from './ProjectPagination';

const url = "https://api.github.com/users/gauri2806/repos";

const PAGE_SIZE = 6;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    , []);

  const pages = Math.ceil(repos.length / PAGE_SIZE);
  const start = (currentPage-1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentRepos = repos.slice(start, end);

  return (
    <>
      <Box className="flex flex-col justify-center">
        <Typography variant='h5' className='self-center text-primary-text'>My Work</Typography>
        <Box
          className="w-full flex flex-wrap justify-center gap-8 px-6 py-10"
        >
          {currentRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </Box>
        <Box>
          <ProjectPagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Box>
      </Box>
    </>
  );
};

export default Projects;
