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
    "AI-assisted development using ChatGPT, Claude & GitHub Copilot",
  ];

  return (
    <>
      <Box>
        <Box className="flex flex-col items-center gap-5 m-5 justify-center">
          <Typography variant='h4'>Building Digital Solutions</Typography>
          <Typography variant='h6' className='w-full md:w-1/2 text-center text-muted-dark-text'>Full-stack developer passionate about creating modern, scalable applications with exceptional user experiences.</Typography>
        </Box>
        <Box className='flex flex-col md:flex-row p-5 md:p-10'>
          <Box className='w-full md:w-1/2 px-15 flex flex-col gap-10'>
            <Box className='flex flex-col gap-5'>
              <Typography variant='h5' className='color-heading-text'>
                A brief summary about me
              </Typography>
              <Typography className='body1 text-muted-text'>
                Software Development Engineer with 2+ years of experience in developing and maintaining scalable web applications with a strong focus on clean architecture, performance, and code quality. Skilled in frontend technologies including HTML5, CSS3, Tailwind CSS, Material UI, React Bootstrap, and React.js, along with concepts such as component-based design, React Hooks, Context API, Custom Hooks, Zustand, and lazy loading. Experienced in integrating REST APIs, working with Axios, OpenAI APIs, and backend technologies like Node.js and Express.js.
              </Typography>
              <Typography className='body-1 text-muted-text'>
                In my current role, I have significantly contributed to improving application quality and maintainability by increasing the Jest code coverage of our module by 27% through comprehensive unit testing. I have also written multiple Cucumber step definitions using Gherkin for automation testing and actively participated in code refactoring tasks such as removing unnecessary event publishers and handling batch job calls efficiently. Additionally, I worked on resolving Coverity issues and successfully reduced the module’s issue count to zero, ensuring better code reliability and adherence to quality standards.
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
