import * as React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@mui/material';
import { useUser } from 'reactfire';
import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useStyles from './styles';
import normalizeAssembly from '../../../../utils/normalizeAssembly';
import { selectAssembly } from '../../../../store/builder/selectors';
import Assemblies from '../../../../api/assemblies';
import { CreatedAssembly } from '../../../../../types';

type DialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
};

const assemblySchema = Yup.object({
  name: Yup.string()
    .min(3, 'Should be at least 3 characters long')
    .required('Name is required'),
  description: Yup.string()
    .min(3, 'Should be at least 3 characters long')
    .required('Password is required'),
});

const AssemblySaveDialog: React.FC<DialogProps> = ({
  open,
  setOpen,
  total,
}) => {
  const styles = useStyles();

  const { data: user } = useUser();

  const handleClose = () => {
    setOpen(false);
  };

  const assembly = useSelector(selectAssembly);
  const normalizedParts = normalizeAssembly(assembly);

  const addAssembly = useMutation({
    mutationFn: (fullAssembly: CreatedAssembly) =>
      Assemblies.create(fullAssembly),
  });

  const handleSave = (values: { name: string; description: string }) => {
    addAssembly.mutate({
      name: values.name,
      description: values.description,
      userId: [user.uid],
      parts: normalizedParts,
      price: total,
    });

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: 'Name',
      description: 'Description',
    },
    validationSchema: assemblySchema,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  return (
    <>
      <Dialog
        classes={{ paper: styles.paperStyle }}
        open={open}
        onClose={handleClose}
      >
        <Box component="form" onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ fontSize: 20 }}>Save assembly</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: !user ? 'red' : {} }}>
              {user
                ? 'Please enter the assembly name and description'
                : 'Please authorize to save the assembly!'}
            </DialogContentText>
            <TextField
              InputProps={{
                classes: { input: styles.autofillStyle },
              }}
              InputLabelProps={{ classes: { root: styles.label } }}
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              autoComplete="off"
              required
              disabled={!user}
            />
            <TextField
              InputProps={{ classes: { input: styles.autofillStyle } }}
              InputLabelProps={{ classes: { root: styles.label } }}
              margin="dense"
              id="description"
              label="Description"
              autoComplete="off"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
              disabled={!user}
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              variant="outlined"
              className={styles.button}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!user}
              color="secondary"
              variant="contained"
              className={styles.button}
            >
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default AssemblySaveDialog;
