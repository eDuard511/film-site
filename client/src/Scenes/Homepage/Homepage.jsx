import React from "react";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  setSearch,
  searchMovies,
} from "../../state/state";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import "./style.css"


import { FormLabel } from "@mui/material";
import { Box, Typography, IconButton } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EventIcon from "@mui/icons-material/Event";
import AttributionIcon from "@mui/icons-material/Attribution";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import MovieItem from "../../Components/MovieItem";
import MainCarousel from "../../Components/MainCarousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DramaFilter from "../../Components/DramaFilter";

const Homepage = () => {
  const { data, favorites, searchArray } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (event) => {
    const { value } = event.target;
    dispatch(setSearch(value));
    dispatch(searchMovies());
  };
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

  return (
    <>
    <Navbar />
    {modalOpen && (
          <MovieItem
            movie={selectedMovie}
            onClose={() => setModalOpen(false)}
          />
        )}
        <MainCarousel />
      <Box width="80%" margin="80px auto">
        <FormLabel
          style={{ position: "relative", top: "35px", left: "85%", zIndex: "1" }}
        >
          <input
            style={{ borderRadius: "3px", height: "30px" ,width:"200px" }}
            type="text"
            placeholder="Search movie.."
            onChange={handleSearch}
          />
        </FormLabel>
        <Typography variant="h4" sx={{mb:"30px"}}>Top 100 movies:</Typography>
        {searchArray.length <= 0 ? (
          <>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 350px)"
            justifyContent="space-between"
          >
            {data.map((e, i) => {
              return (
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
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4" sx={{mb:"30px"}}>Drama:</Typography>
            <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 350px)"
            justifyContent="space-between"
            >
              <DramaFilter />
            </Box>
          </Box>
          </>
          
         
        ) : (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 350px)"
            justifyContent="space-between"
          >
            {searchArray.map((e, i) => {
              return (
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
              );
            })}
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
