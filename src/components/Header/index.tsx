import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Box, Container, Typography } from '@mui/material';
import { Link, generatePath } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppLogo } from '../Icons';
import { ROUTES } from '../../common/constants';
import { selectUser } from '../../store/builder/selectors';
import { logOut } from '../../store/builder/slice';

const Header: React.FC = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingY={2}
        >
          <Link to="/">
            <AppLogo />
          </Link>
          <Box display="flex" gap={4} alignItems="center">
            {!user ? (
              <>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={generatePath(ROUTES.LOGIN)}
                >
                  <Button color="primary" variant="contained">
                    Sign In
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={generatePath(ROUTES.REGISTER)}
                >
                  <Button color="secondary" variant="contained">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Typography variant="h3">{user.email}</Typography>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
