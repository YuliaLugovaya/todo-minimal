import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer(props) {
  return (
    <footer className='footer'>
      <Container style={{ margin: 0, padding: "0 0 0 5vw" }}>
        <Typography color="textSecondary" variant="caption">© 2023 ToDo-list.</Typography>
      </Container>
    </footer>
  );
}

export default Footer;