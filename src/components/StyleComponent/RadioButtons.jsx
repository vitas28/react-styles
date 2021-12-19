import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';

const RadioButtons = ({ props }) => (
  <FormControl component="fieldset">
    <p className="style-title ">Font Size:</p>
    <RadioGroup row aria-label="gender" name="fontSize">
      <FormControlLabel
        onChange={props.changeHandler}
        value="12px"
        control={<Radio />}
        label="12px"
      />
      <FormControlLabel
        onChange={props.changeHandler}
        value="14px"
        control={<Radio />}
        label="14px"
      />
      <FormControlLabel
        onChange={props.changeHandler}
        value="16px"
        control={<Radio />}
        label="16px"
      />
      <FormControlLabel
        onChange={props.changeHandler}
        value="18px"
        control={<Radio />}
        label="18px"
      />
      <FormControlLabel
        onChange={props.changeHandler}
        value="20px"
        control={<Radio />}
        label="20px"
      />
    </RadioGroup>
  </FormControl>
);

export default RadioButtons;
