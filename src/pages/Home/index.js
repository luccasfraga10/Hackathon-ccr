import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './styles'

const PageHome = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.umaClasseQualquer}>
        Teste de html com classe
      </div>
      <Button variant="contained" color="primary">
        Botão
      </Button>
    </>
  );
};

export default PageHome;
