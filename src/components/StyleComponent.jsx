import React from 'react';
import RadioButtons from './StyleComponent/RadioButtons';
import CheckboxBlock from './StyleComponent/CheckboxBlock';
import SelectBox from './StyleComponent/SelectBox';
import ColorBlock from './StyleComponent/ColorBlock';

const StyleComponent = ({ child }) => (
  <div>
    <RadioButtons props={child} />
    <SelectBox props={child} />
    <ColorBlock props={child} />
    <CheckboxBlock props={child} />
  </div>
);

export default StyleComponent;
