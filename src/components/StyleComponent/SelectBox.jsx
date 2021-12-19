import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectBox = ({ props }) => (
  <div>
    <p className="style-title">Font Family:</p>
    <div className="select">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selected}
          label="Choose option"
          name={'fontFamily'}
          onChange={props.selectChange}
        >
          <MenuItem value={'cursive'}>cursive</MenuItem>
          <MenuItem value={'fantasy'}>fantasy</MenuItem>
          <MenuItem value={'monospace'}>monospace</MenuItem>
          <MenuItem value={'sans-serif'}>sans-serif</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>
);

export default SelectBox;
