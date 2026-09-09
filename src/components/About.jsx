import React from 'react';
import { Box, Typography, Avatar, ListItemText, ListItemIcon, List, ListItem } from '@mui/material';
import SkillCard from './SkillCard';
import skillsData from '../data/skillsData';
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";


const About = () => {
  const strengths = [
    "Scalable frontend development with React.js",
    "Clean and reusable component-based architecture",
    "Responsive UI design using Tailwind CSS & Material UI",
    "Strong testing practices with Jest & React Testing Library",
    "Automation testing using Cucumber.js & Gherkin",
    "REST API integration and backend connectivity",
    "Code refactoring and performance optimization",
    "Debugging and issue resolution using Chrome DevTools & Postman",
    "Version control and collaborative development with Git & GitHub",
    "AI-assisted development using Claude & GitHub Copilot",
  ];

  return (
    <>
      <Box>
        <Box className="flex flex-col items-center gap-5 m-5 justify-center">
          <Typography variant='h4'>Building Digital Solutions</Typography>
          <Typography variant='h6' className='w-full md:w-1/2 text-center text-muted-dark-text'>Software developer passionate about creating modern, scalable applications with exceptional user experiences.</Typography>
        </Box>
        <Box className='flex flex-col md:flex-row p-5 md:p-10'>
          <Box className='w-full md:w-1/2 px-15 flex flex-col gap-10'>
            <Box className='flex flex-col gap-5'>
              <Typography variant='h5' className='color-heading-text'>
                A brief summary about me
              </Typography>
              <Typography className='body1 text-muted-text'>
                I’m a Frontend Engineer with professional experience building and maintaining enterprise-grade web applications using React.js, JavaScript, TypeScript and modern state-management patterns.
              </Typography>
              <Typography className='body1 text-muted-text'>
                Currently, I work on Siemens Teamcenter Active Workspace, where I develop new features, refactor legacy frontend code, troubleshoot production issues and improve application reliability and maintainability.
              </Typography>
              <Typography className='body-1 text-muted-text'>
                I’m particularly interested in frontend architecture, performance optimization, reusable component design, testing and creating intuitive user experiences.
              </Typography>

            </Box>
            <Box>
              <Typography variant='h5' className=''>What I bring</Typography>
              <List className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {strengths.map((item, index) => (
                  <ListItem
                    key={index}
                    className="!px-0 !py-2 flex items-start"
                  >
                    <ListItemIcon className="!min-w-[35px] mt-1">
                      <CheckCircleRoundedIcon className="text-primary-text text-[20px]" />
                    </ListItemIcon>

                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        className:
                          "text-muted-text text-sm md:text-base leading-relaxed",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box className='w-full md:w-1/2 flex flex-col gap-5'>
          <Typography variant='h5' className='color-heading-text'>
                Skills and Technologies
              </Typography>
            {skillsData.map((skillSection) => {
              return <SkillCard key={skillSection.id} skillSection={skillSection} />
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
