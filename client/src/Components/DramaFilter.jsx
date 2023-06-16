import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, IconButton } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EventIcon from "@mui/icons-material/Event";
import AttributionIcon from "@mui/icons-material/Attribution";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { addToFavorites,removeFromFavorites,} from '../state/state';
import { useDispatch } from 'react-redux';
import MovieItem from './MovieItem';

const DramaFilter = () => {
    
    const {data,favorites} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
    const drama = data.filter((item) => {
        return item.genre === "Drama" 
      });
  return (
    drama.map((e,i)=>{
        return(
            <>
            {modalOpen && (
          <MovieItem
            movie={selectedMovie}
            onClose={() => setModalOpen(false)}
          />
        )}
    <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 350px)"
            justifyContent="space-between"
          >
                <Box display="flex" justifyContent="center">
                  <Box key={`${e.title}${i}`}>
                    <Box position='relative' top='25px' left="5px" color='white'>
                      <Typography fontWeight="bold">{e.title}</Typography>
                    </Box>
                    <Box>
                      <img
                        onClick={() => {
                          setSelectedMovie(e);
                          setModalOpen(true);
                        }}
                        src={e.image}
                        alt="img"
                        height="400px"
                        id="imagecard"
                      />
                    </Box>
                    <Box 
                    position='relative'
                    top='-130px'
                    color='white'
                    >
                    <Box
                      display="flex"
                      flexDirection="row"
                      width="280px"
                      height="27px"
                      justifyContent="space-between"
                    >
                      <Box display="flex" flexDirection="row">
                        <GradeIcon />
                        <Typography>{e.rating}</Typography>
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <EventIcon />
                      <Typography>{e.year}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <PsychologyAltOutlinedIcon />
                      <Typography>{e.genre}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <LocalActivityOutlinedIcon />
                      <Typography>{e.director[0]}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" width='91%' justifyContent='space-between'>
                      <Box display='flex' flexDirection='row'>
                        <AttributionIcon />
                      <Typography>{e.writers[0]}</Typography>
                      </Box>
                      <Box position='relative' top='-7px'>
                        {favorites.includes(e) ? (
                          <IconButton
                            id="add"
                            onClick={() => dispatch(removeFromFavorites(e))}
                          >
                            <RemoveCircleIcon sx={{color: "white",
                            }}/>
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={() => dispatch(addToFavorites(e))}
                          >
                            <AddCircleIcon sx={{color: "white",
                            }}/>
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                    </Box>
                  </Box>
                </Box>
              
          </Box>
          </>
        )
    })
  )
}

export default DramaFilter
