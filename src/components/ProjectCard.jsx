import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = ({ repo }) => {

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: repo.name,
        text: "Check out this GitHub repo!",
        url: repo.html_url,
      });
    } else {
      navigator.clipboard.writeText(repo.html_url);
      alert("Repo link copied to clipboard!");
    }
  };

  return (
    <Card
      className="
        w-80 min-h-[260px]
        rounded-3xl
        transition-all duration-300
        hover:-translate-y-2
        flex flex-col justify-between
        border
        bg-[#1e293b]
        border-[#334155]
        hover:border-[#475569]
        shadow-lg shadow-black/10
      "
    >
      <CardContent className="flex flex-col h-full p-6">

        {/* Repo Name */}
        <Typography
          variant="h5"
          className="
            font-semibold
            text-[#f8fafc]
            break-words
            tracking-wide
          "
        >
          {repo.name}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          className="
            text-[#94a3b8]
            mt-4
            line-clamp-4
            leading-7
          "
          title={repo.description}
        >
          {repo.description || repo.name}
        </Typography>

        {/* Buttons */}
        <Box className="flex gap-3 mt-auto pt-6">

          {/* View Repo Button */}
          <Button
            variant="contained"
            fullWidth
            href={repo.html_url}
            target="_blank"
            endIcon={<LaunchIcon />}
            className="
              !rounded-xl
              !bg-[#e2e8f0]
              hover:!bg-[#cbd5e1]
              !text-[#0f172a]
              normal-case
              !py-2.5
              !shadow-none
              !font-medium
            "
          >
            View Repo
          </Button>

          {/* Share Button */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ShareIcon />}
            onClick={handleShare}
            className="
              !rounded-xl
              !border-[#475569]
              !text-[#cbd5e1]
              hover:!bg-[#334155]
              hover:!border-[#64748b]
              normal-case
              !py-2.5
            "
          >
            Share
          </Button>

        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;