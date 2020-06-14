import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import useStyles from './styles'
import SelectRoute from '../SelectRoute';
import DateRoute from '../DateRoute';

const HeaderTripProgress = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const ContentComponent = [
    {
      id: 0,
      component: <SelectRoute onNext={handleNext} />
    },
    {
      id: 1,
      component: <DateRoute />
    },
  ]

  return (
    <Box className={classes.content} p={3}>
      <MobileStepper
        variant="progress"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        LinearProgressProps={{
          className: classes.progress
        }}
        backButton={
          <Button className={classes.iconButton} onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
      <Typography component="b" className={classes.header}>agendamento  de viagem</Typography>
      <Typography component="span" className={classes.description}>Selecione a sua rota</Typography>
      {ContentComponent && ContentComponent.map(item => item.id === activeStep && <div key={item.id}>{item.component}</div>)}
    </Box>
  );
}

export default HeaderTripProgress;
