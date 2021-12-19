import React from 'react';
import { Button } from '@mui/material';

const ColorBlock = ({ props }) => (
  <div>
    <div className="color-block">
      <div>
        <p className="style-title">Colors:</p>
        <div>
          <div className="btn-wrapper color-btn">
            <Button onClick={props.onBtnColor} variant={'contained'}>
              Color of Text
            </Button>
            <Button onClick={props.onBtnBgColor} variant={'contained'}>
              Background color
            </Button>
          </div>
        </div>
      </div>
      {props.onColor && (
        <div onClick={props.changeColor} className="change-color">
          <span className={'color'} style={{ background: 'red' }} />
          <span className={'color'} style={{ background: 'blue' }} />
          <span className={'color'} style={{ background: 'green' }} />
          <span className={'color'} style={{ background: 'black' }} />
          <span className={'color'} style={{ background: 'yellow' }} />
          <span className={'color'} style={{ background: 'pink' }} />
          <span className={'color'} style={{ background: 'white' }} />
          <span className={'color'} style={{ background: 'blueviolet' }} />
          <span className={'color'} style={{ background: 'teal' }} />
        </div>
      )}
      {props.onBgColor && (
        <div onClick={props.changeBgColor} className="change-color">
          <span className={'color'} style={{ background: 'red' }} />
          <span className={'color'} style={{ background: 'blue' }} />
          <span className={'color'} style={{ background: 'green' }} />
          <span className={'color'} style={{ background: 'black' }} />
          <span className={'color'} style={{ background: 'yellow' }} />
          <span className={'color'} style={{ background: 'pink' }} />
          <span className={'color'} style={{ background: 'white' }} />
          <span className={'color'} style={{ background: 'blueviolet' }} />
          <span className={'color'} style={{ background: 'teal' }} />
        </div>
      )}
    </div>
  </div>
);

export default ColorBlock;
