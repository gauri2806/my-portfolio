import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="flex flex-col items-center px-4 md:px-6 my-10">

      <img
        src="/assets/images/profile-picture-2.jpeg"
        alt="Profile"
        className="size-40 md:size-80 rounded-full shadow-2xl shadow-black/40 ring-2 ring-[#7f95aa]/60 ring-offset-2 ring-offset-[#0f1720] transition hover:ring-[#b7c9d8]"
      />
      <Typography variant="h2" component="h1" gutterBottom className="text-center font-semibold text-heading-text mt-10">
        Hi, I'm Gauri Katti
      </Typography>
      <Typography variant="h5" component="h2" className="text-center mb-8 text-[#a9bbc9] w-full md:w-1/2">
        Full-stack developer and UI/UX designer building modern, scalable applications with exceptional user experiences.
      </Typography>
      <Box className='flex gap-5'>
        <Button variant='contained' sx={{ textTransform: 'none' }}
          onClick={() => navigate("./projects")}
          className='!rounded-xl !bg-light-card hover:!bg-primary-text !text-dark-text normal-case !py-2.5 !shadow-none !font-medium'
        >Explore My Work <KeyboardDoubleArrowRightIcon fontSize='small' className='ml-1' /></Button>
        <Button variant='contained' sx={{ textTransform: 'none' }} component='a'
          href='/assets/documents/Gauri_Katti_Resume.pdf' download="Gauri_Katti_Resume"
          className='!rounded-xl !bg-light-card hover:!bg-primary-text !text-dark-text normal-case !py-2.5 !shadow-none !font-medium'
        ><GetAppIcon fontSize='small' className='mr-1' /> Resume</Button>
      </Box>
    </Box>
  );
}

export default Home;
