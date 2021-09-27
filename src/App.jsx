import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

const PageText = ({ count, children }) => {
  const [sum, setSum] = useState(count);

  useEffect(() => {
    setSum(sum + 1);
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>
          {children}
          {sum}
        </Grid>
      </Grid>
    </>
  );
};

export const App = () => <PageText count={0}>I'm text from a component</PageText>;
