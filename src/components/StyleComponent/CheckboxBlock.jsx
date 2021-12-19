import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxBlock = ({ props }) => (
  <div className="checkbox">
    <p className="style-title">Font Style:</p>
    <FormControlLabel
      onChange={props.checkBoldHandler}
      checked={props.checkBold}
      name={'fontWeight'}
      value="Bold"
      control={<Checkbox />}
      label="Bold text"
      labelPlacement="end"
    />
    <FormControlLabel
      onChange={props.checkItalicHandler}
      checked={props.checkItalic}
      name={'fontStyle'}
      value="Italic"
      control={<Checkbox />}
      label="Cursive text"
      labelPlacement="end"
    />
  </div>
);

export default CheckboxBlock;
