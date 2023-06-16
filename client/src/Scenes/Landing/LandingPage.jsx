import { Box,Typography } from '@mui/material'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import shiba from '../../assets/shiba.png';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box>
        <Box>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mongoflix
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  >
                  <Typography textAlign="center">Movies</Typography>
                </MenuItem>
                <MenuItem  >
                  <Typography  textAlign="center">Shows</Typography>
                </MenuItem>
                <MenuItem  >
                  <Typography  textAlign="center">Contact</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <img src={shiba} alt="dog" style={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,width: "50px",height:"50px"}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mongoflix
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            
              <Button
                
                onClick={()=>navigate("/homepage")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  <Typography >Movies</Typography>
              </Button>
              <Button
                
                onClick={()=>navigate("/favorite")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  <Typography >Shows</Typography>
              </Button>
              <Button
                
                onClick={()=>navigate("/favorite")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  <Typography >Contact</Typography>
              </Button>
          
          </Box>

          
          
        </Toolbar>
      </Container>
    </AppBar>
        </Box>
    </Box>
  )
}

export default LandingPage
