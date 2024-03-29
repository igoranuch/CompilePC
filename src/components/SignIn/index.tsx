/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useContext, useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useUser } from 'reactfire';
import { ROUTES } from '../../common/constants';
import useStyles from './styles';
import app from '../../common/firebaseApp';
import { UIContext } from '../UIContext';

const signInSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignIn = () => {
  const styles = useStyles();

  const navigate = useNavigate();

  const { data: user } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const { setAlert } = useContext(UIContext);

  const auth = app.auth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        await auth.signInWithEmailAndPassword(values.email, values.password);
      } catch (err) {
        if (err instanceof Error) {
          setAlert({
            show: true,
            severity: 'error',
            message: err.message,
          });
        }
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            InputProps={{ classes: { input: styles.autofillStyle } }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            InputProps={{ classes: { input: styles.autofillStyle } }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link
            style={{ textDecoration: 'none' }}
            to={generatePath(ROUTES.REGISTER)}
          >
            <Typography className={styles.linkText}>
              Don't have an account? Sign Up
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
