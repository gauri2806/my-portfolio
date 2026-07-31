import React, { useState } from 'react';
import { Typography, Box, Button, ButtonGroup, Modal } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';

const Home = ({ handleScroll }) => {
  const [openResume, setOpenResume] = useState(false);
  function handleShowResume(){
    setOpenResume(true)
  }
  function handleHideResume(){
    setOpenResume(false)
  }
  return (
    <>
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
            onClick={() => handleScroll('projects')}
            className='!bg-light-card hover:!bg-primary-text !text-dark-text normal-case !py-2.5 !shadow-none !font-medium'
          >Explore My Work <KeyboardDoubleArrowRightIcon fontSize='small' className='ml-1' /></Button>
          <ButtonGroup>
            <Button variant='contained' sx={{ textTransform: 'none' }} component='a'
              className='!bg-light-card hover:!bg-primary-text !text-dark-text normal-case !py-2.5 !shadow-none !font-medium'
              onClick={handleShowResume}
            >
              View Resume
            </Button>

            <Button variant='outlined' className="!border-input-border !text-primary-text hover:!bg-input-bg hover:!border-input-hover normal-case"
              component='a' href='/assets/documents/GauriKattiResume.pdf' download="GauriKattiResume">
              <GetAppIcon fontSize='small' />
            </Button>
          </ButtonGroup>
        </Box>

      </Box>
      <Modal
        open={openResume}
        onClose={handleHideResume}
        className='w-full flex justify-center items-center'
      >
        <Box
          component="iframe"
          src="/assets/documents/GauriKattiResume.pdf"
          title="Gauri Katti Resume"
          className="w-11/12 md:w-3/4 h-[600px] mt-8 rounded-lg shadow-xl border-none"
        />
      </Modal>
    </>
  );
}

export default Home;
