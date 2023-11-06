import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabels = () => {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="La informacion es correcta?" />
    </FormGroup>
  );
}

export default CheckboxLabels