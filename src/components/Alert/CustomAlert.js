import React from 'react';
import Alert from '@mui/material/Alert';

function CustomAlert(props) {
  const { severity, message, onClose } = props;

  return (
    <Alert severity={severity} onClose={onClose} className="custom-alert">
      {message}
    </Alert>
  );
}

export default CustomAlert;
