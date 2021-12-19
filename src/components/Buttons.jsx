import React from 'react';
import { Button } from '@mui/material';

const Buttons = ({ onEdit, onStyle }) => (
  <div>
    <div className="btn-wrapper">
      <Button onClick={onEdit} variant={'contained'} color={'info'}>
        edit
      </Button>
      <Button onClick={onStyle} variant={'contained'} color={'secondary'}>
        style
      </Button>
    </div>
  </div>
);

export default Buttons;
