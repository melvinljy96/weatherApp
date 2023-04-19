import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function DeleteDialog({ open, handleCloseDialog, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleCloseDialog} className='rounded-2xl'>
      <DialogTitle>Confirm deletion</DialogTitle>
      <DialogContent>
        <div>Are you sure you want to delete this history record?</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary" shape="rounded">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="warning">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
