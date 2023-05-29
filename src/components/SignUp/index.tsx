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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUser } from 'reactfire';
import { ROUTES } from '../../common/constants';
import useStyles from './styles';
import app from '../../common/firebaseApp';
import { UIContext } from '../UIContext';

const signUpSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignUp = () => {
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
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        await auth.createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            InputProps={{ classes: { input: styles.autofillStyle } }}
            required
            fullWidth
            margin="normal"
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
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link
            style={{ textDecoration: 'none' }}
            to={generatePath(ROUTES.LOGIN)}
          >
            <Typography className={styles.linkText}>
              Already have an account? Sign in
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
