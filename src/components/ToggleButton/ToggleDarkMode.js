import React from 'react';
import Fab from '@mui/material/Fab';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ToggleDarkModeFab(props) {
  const { toggleClassValue, isDarkMode, handleToggle } = props;

  return (
    <Fab className={`${toggleClassValue} fixed bottom-0 right-0 m-3`} onClick={handleToggle}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </Fab>
  );
}

export default ToggleDarkModeFab;
