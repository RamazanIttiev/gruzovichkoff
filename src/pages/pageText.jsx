import React, { useState, useEffect } from 'react';
import { Grid, styled } from '@mui/material';

const Title = styled('h1')({
  color: 'red',
});

export const PageText = ({ count, children }) => {
  const [sum, setSum] = useState(count);

  useEffect(() => {
    setSum(sum + 1);
  }, []);

  return (
    <>
      <Title>Hello World!</Title>
      <Grid container>
        <Grid item xs={12}>
          {children}
          {sum}
        </Grid>
      </Grid>
    </>
  );
};
