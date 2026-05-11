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
    <Box className="w-full flex justify-center px-4 mt-4">
      <AppBar
        position="static"
        elevation={0}
        className="
          w-full
          max-w-3xl
          rounded-full
          border
          border-[#7f95aa]/25
          shadow-xl
          shadow-black/20
          px-3 md:px-5
          py-2 md:py-3
        "
        sx={{
          backgroundColor: 'rgba(18, 28, 38, 0.84)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <Box className="flex items-center justify-between w-full">
          
          {/* Profile */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className={`
              cursor-pointer
              rounded-full
              ring-2
              ring-[#7f95aa]/60
              ring-offset-2
              ring-offset-[#0f1720]
              transition
              hover:ring-[#b7c9d8]
              ${location.pathname === '/' ? 'ring-[#b7c9d8]' : ''}
            `}
          >
            <img
              src="src/assets/images/profile-picture-2.jpeg"
              alt="Profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
          </button>

          {/* Nav Items */}
          <Box className="flex items-center justify-center flex-1 ml-2 md:ml-6 gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`
                    rounded-full!
                    px-2! md:px-4!
                    py-1! md:py-2!
                    min-w-fit!
                    text-xs! md:text-sm!
                    transition
                    ${isActive
                      ? 'bg-[#263746]! text-[#f5f8fb]!'
                      : 'text-[#dce6ee] hover:bg-[#263746] hover:text-[#f5f8fb]'
                    }
                  `}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;