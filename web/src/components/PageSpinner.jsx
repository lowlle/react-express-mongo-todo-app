import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const CenteredWrapper = styled(Grid)(({ theme }) => ({
  height: '100vh',
}));

const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.mainPurple
}));


const PageSpinner = () => (
  <CenteredWrapper container direction="column" justifyContent="center" alignItems="center">
    <Spinner size={200} thickness={4} />
  </CenteredWrapper>
);

export default PageSpinner;

