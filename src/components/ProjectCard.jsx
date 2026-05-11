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
        w-full max-w-sm
        rounded-3xl
        transition-all duration-300
        hover:-translate-y-2
        flex flex-col justify-between
        border
        bg-small-dark-card-bg
        border-input-border
        hover:border-input-hover
        shadow-lg shadow-black/10
      "
    >
      <CardContent className="flex flex-col h-full p-6">

        {/* Repo Name */}
        <Typography
          variant="h5"
          className="
            font-semibold
            text-heading-text
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
            text-muted-text
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
              !bg-light-card
              hover:!bg-primary-text
              !text-dark-text
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
              !border-input-border
              !text-primary-text
              hover:!bg-input-bg
              hover:!border-input-hover
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