import React from 'react';
import { AppBar, Box, Card, CardContent, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const handleClick = (isShown, dispatch) => {
  dispatch(toggleDrawer(!isShown));
};

const NavBar = () => {
  const isShown = useSelector(selectToggler);
  const dispatch = useDispatch();

  return (
    <AppBar sx={{ position: 'relative', backgroundColor: '#909090' }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={() => handleClick(isShown, dispatch)}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none', margin: '0 1rem' }}>
            <Card sx={{ maxWidth: 200, backgroundColor: '#cccccc' }}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Home
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link to='/history' style={{ color: 'inherit', textDecoration: 'none', margin: '0 1rem' }}>
            <Card sx={{ maxWidth: 200, backgroundColor: '#cccccc' }}>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  History
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
