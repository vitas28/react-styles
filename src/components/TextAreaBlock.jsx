import React from 'react';
import { Button, TextareaAutosize } from '@mui/material';

const TextAreaBlock = ({ child }) => (
  <div>
    <div>
      <div className="textarea">
        <TextareaAutosize
          value={child.textarea}
          onChange={child.changeHandlerText}
          minRows={10}
        />
      </div>
      <div className="btn-wrapper bar">
        <Button
          onClick={child.onChangeText}
          variant={'contained'}
          color={'success'}
        >
          save
        </Button>
      </div>
    </div>
  </div>
);

export default TextAreaBlock;
