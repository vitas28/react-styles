import React from 'react';
import './styles/main.css';
import { useFunction } from './hooks/useFunction';
import Text from './components/Text';
import Buttons from './components/Buttons';
import Edit from './components/Edit';

const App = () => {
  const params = useFunction();

  return (
    <div>
      <Text
        textStyle={params.textStyle}
        text={params.text}
        background={params.containerColor}
      />
      <Buttons onEdit={params.onEdit} onStyle={params.onStyle} />
      <Edit
        props={{
          ...params
        }}
      />
    </div>
  );
};

export default App;
