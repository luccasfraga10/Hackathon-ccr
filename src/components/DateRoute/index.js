import React, { useState } from 'react';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import history from '../../services/history';

export default function DateAndTimePickers() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const classes = useStyles();

  const handleNext = () => {
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
    history.push('/successful-scheduling');
  };

  const handleChange = (e) => {
    if (e.target.name === 'date') {
      setDate(e.target.value);
    }
    if (e.target.name === 'time') {
      setTime(e.target.value);
    }
  }

  return (
    <div className={classes.container}>
      <TextField
        id="date"
        label="Data"
        type="date"
        name="date"
        className={classes.textFieldDate}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="time"
        label="Horário"
        type="time"
        name="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        variant="filled"
        onChange={handleChange}
      />

      <div className={classes.boxButton}>
        <Button disabled={!time || !date} variant="contained" color="primary" className={classes.button} size="large" onClick={handleNext}>
          Confirmar agendamento
        </Button>
      </div>
    </div>
  );
}
