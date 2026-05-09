import React from 'react';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">

      <img
        src="src/assets/images/profile-picture.jpeg"
        alt="Profile"
        className="w-48 h-48 rounded-full shadow-2xl shadow-black/40 ring-4 ring-[#7f95aa] ring-offset-8 ring-offset-[#0f1720]"
      />
      <Typography variant="h2" component="h1" gutterBottom className="text-center text-[#f5f8fb] mt-10">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" component="h2" className="text-center mb-8 text-[#a9bbc9]">
        Crafting beautiful web experiences with React and Tailwind CSS
      </Typography>
    </div>
  );
}

export default Home;
