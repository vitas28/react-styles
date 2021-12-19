import React from 'react';
import { Container } from '@mui/material';

const Text = ({ textStyle, text, background }) => (
  <Container className="container" style={{ background: background }}>
    <div dangerouslySetInnerHTML={{ __html: text }} style={textStyle} />
  </Container>
);

export default Text;
