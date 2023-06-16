import React from "react";
import { Box, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GradeIcon from "@mui/icons-material/Grade";
import EventIcon from "@mui/icons-material/Event";
import AttributionIcon from "@mui/icons-material/Attribution";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";


const MovieItem = ({ movie, onClose }) => {
  return (
    <Box 
    position="fixed"
  top="15%"
  left="10%"
  transform="translate(-30%, -36%)"
  display='flex'
  flexDirection='column'
  border='white 1px solid'
  borderRadius='15px'
  backgroundColor='#1976d2'
  zIndex='10'
  width='80%'
  height='75%'
    >
      <Box 
      display='flex'
      justifyContent='space-between'
      >
        <Typography color="white" m="5px 10px 0px 10px" variant="h5"fontWeight="bold">{movie.title}</Typography>
        <IconButton onClick={onClose}>
        <CloseIcon sx={{color:"white"}}/>
      </IconButton>
      </Box>
      <Box>
      <iframe width="100%" height="550" title={`${movie.trailer}title`}
src={movie.trailer}>
</iframe>
      </Box>
      <Box>
        <Typography p='20px'color='white'>{movie.description}</Typography>
      </Box>
      <Box display='flex' flexDirection='row' m="0 15px 0 15px" justifyContent='space-between'>
      <Box display="flex" flexDirection="row">
                        <GradeIcon />
                        <Typography color='white'>{movie.rating}</Typography>
                      </Box>
                      <Box display="flex" flexDirection="row">
                      <EventIcon />
                      <Typography color='white'>{movie.year}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <PsychologyAltOutlinedIcon />
                      <Typography color='white'>{movie.genre[0]}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <LocalActivityOutlinedIcon />
                      <Typography color='white'>{movie.director[0]}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <AttributionIcon />
                      <Typography color='white' >{movie.writers[0]}</Typography>
                    </Box>
      </Box>
    </Box>
  );
};

export default MovieItem;
