import { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const navItems = [
  { label: 'About', targetId: 'about' },
  { label: 'Journey', targetId: 'journey' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Contact', targetId: 'contact' },
];

const Navbar = ({handleScroll}) => {


  return (
    <Box className="w-full flex justify-center px-4 mt-4">
      <AppBar
        position="fixed"
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
          left: '50%',
          transform: 'translateX(-50%)',
          top: '1rem'
        }}
      >
        <Box className="flex items-center justify-between w-full">

          {/* Profile - Scrolls to Home */}
          <button
            type="button"
            onClick={() => handleScroll('home')}
            className="
              cursor-pointer
              rounded-full
              ring-2
              ring-[#7f95aa]/60
              ring-offset-2
              ring-offset-[#0f1720]
              transition
              hover:ring-[#b7c9d8]
            "
          >
            <img
              src="/assets/images/profile-picture-2.jpeg"
              alt="Profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
          </button>

          {/* Nav Items */}
          <Box className="flex items-center justify-center flex-1 ml-2 md:ml-6 gap-1 md:gap-2">
            {navItems.map((item) => {
              return (
                <Button
                  key={item.targetId}
                  onClick={() => handleScroll(item.targetId)}
                  className="
                    rounded-full!
                    px-2! md:px-4!
                    py-1! md:py-2!
                    min-w-fit!
                    text-xs! md:text-sm!
                    transition
                    text-[#dce6ee] 
                    hover:bg-[#263746] 
                    hover:text-[#f5f8fb]
                  "
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
