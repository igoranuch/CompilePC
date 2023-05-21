import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Box, Container, Typography } from '@mui/material';
import { Link, generatePath } from 'react-router-dom';
import { useUser } from 'reactfire';
import { AppLogo } from '../Icons';
import { ROUTES } from '../../common/constants';
import app from '../../common/firebaseApp';

const Header: React.FC = () => {
  const { data: user } = useUser();

  const auth = app.auth();

  const handleLogOut = () => {
    auth.signOut();
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
                <Link
                  style={{ textDecoration: 'none' }}
                  to={generatePath(ROUTES.ASSEMBLIES)}
                >
                  <Button color="secondary" variant="contained">
                    Assemblies
                  </Button>
                </Link>
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
