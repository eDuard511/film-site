import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../state/state";
import Navbar from "../Navbar/Navbar"
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Typography, IconButton } from "@mui/material";
import Footer from "../Footer/Footer";

const Favorite = () => {
    const { favorites } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    return (
      <>
      <Navbar />
      <Box width="80%" margin="80px auto">
        {favorites.length > 0 ? favorites.map((e, i) => {
          return (
            <Box key={i}>
              <Box display='flex' flexDirection='column' gap='10px'>
                <Box display='flex' flexDirection='row' alignItems='center' gap='10px'>
                  <Box width="20%%">
                    <img src={e.image} alt="movie" style={{ height: "400px" }} />
                  </Box>
                  <Box width='60%' mb='10%'>
                    <Box display='flex' flexDirection='row' alignItems='center' gap='10px' mt='20px'>
                      <Typography variant='h4' >{e.title}</Typography>
                      <Typography color='blue' fontSize='24px'>{`(${e.year})`}</Typography>
                    </Box>
                    <Typography sx={{ margin: "3px 0 30px 0" }}>{e.title}</Typography>
                    <Box display='flex' flexDirection='row'>
                      <Typography fontSize='17px' sx={{ mr: "3px" }}>Regia:</Typography>
                      <Typography fontSize='17px' color="blue">{e.director}</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row'>
                      <Typography fontSize='17px' sx={{ mr: "3px" }}>Gen Film:</Typography>
                      <Typography fontSize='17px' color="blue">{e.genre}</Typography>
                    </Box>
                    <Typography sx={{ margin: "20px 0 30px 0" }} fontSize='17px'>{e.description}</Typography>
                    <Box>
                      <Typography fontSize='17px'>Nominalizari</Typography>
                    </Box>
                  </Box>
                  <Box width='20%' mb="23%">
                    <Box display='flex' justifyContent='flex-end'>
                      <Box display='flex' flexDirection='row' justifyContent='center'>
                      {favorites.includes(e) ? (
                        <IconButton
                        
                          variant="contained"
                          id="add"
                          onClick={() => dispatch(removeFromFavorites(e))}
                        >
                          <StarIcon sx={{ color: "yellow"}} fontSize="large" />
                        </IconButton>
                      ) : (
                        <IconButton
                          variant="contained"
                          onClick={() => dispatch(addToFavorites(e))}
                        >
                          <StarOutlineIcon sx={{ color: "yellow"}}fontSize="large"  />
                        </IconButton>
                      )}
                    </Box>
                    <Box display='flex' pt="12px" fontSize='20px'>
                      {e.rating}
                    </Box>
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                      IMDB: {e.rating}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        }) : "NO FAVORITE MOVIES"}
      </Box>
      <Footer />
    </>
    );
};

export default Favorite;
