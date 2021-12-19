import React from 'react';
import { Container } from '@mui/material';
import TextAreaBlock from './TextAreaBlock';
import StyleComponent from './StyleComponent';

const Edit = ({ props }) => (
  <Container className="container">
    {props.edit && <TextAreaBlock child={props} />}
    {props.style && <StyleComponent child={props} />}
  </Container>
);

export default Edit;
