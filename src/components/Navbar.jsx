import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Journey', path: '/journey' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      className="flex items-center justify-between px-6 py-4 w-1/2 mx-auto rounded-full mt-4 border border-[#7f95aa]/25 shadow-xl shadow-black/20"
      sx={{
        backgroundColor: 'rgba(18, 28, 38, 0.84)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <Box className="flex items-center space-x-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="cursor-pointer rounded-full ring-2 ring-[#7f95aa]/60 ring-offset-2 ring-offset-[#0f1720] transition hover:ring-[#b7c9d8]"
        >
          <img
            src="src/assets/images/profile-picture.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full shadow-lg shadow-black/30"
          />
        </button>

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`
                rounded-full px-4 py-2 transition
                ${isActive
                  ? 'bg-[#263746] text-[#f5f8fb]'
                  : 'text-[#dce6ee] hover:bg-[#263746] hover:text-[#f5f8fb]'
                }
              `}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </AppBar>
  );
};

export default Navbar;