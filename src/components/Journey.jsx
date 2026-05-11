import React from 'react';
import { Typography, Box } from '@mui/material';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import educationList from '../assets/data/educationList';
import experienceList from '../assets/data/experienceList';

const Journey = () => {

  return (
    <>
      <Box className="w-full px-4 md:px-6 lg:px-20 my-10 flex flex-col gap-10">
        <Box className="flex flex-col items-center justify-center gap-5">
          <Typography variant='h5'>Technical Experience</Typography>
          <Box className="w-full flex flex-col gap-5 items-center justify-center">
            {
              experienceList.map((experience) => {
                return <ExperienceCard key={experience.id} experience={experience} />
              })
            }
          </Box>
        </Box>


        <Box className="flex flex-col items-center justify-center gap-5">
          <Typography variant='h5'>Educational Background</Typography>
          <Box className="w-full flex flex-col gap-5 items-center justify-center">
            {
              educationList.map((education) => {
                return <EducationCard key={education.id} education={education} />
              })
            }
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Journey;
