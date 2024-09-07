import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [display, setDisplay] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = (value: string) => {
    setDisplay(prev => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = async () => {
    try {
      setLoading(true);
      const [operation, ...numbers] = display.split(/([+\-*/])/);
      const num1 = parseFloat(numbers[0]);
      const num2 = parseFloat(numbers[1]);
      const result = await backend.calculate(operation, num1, num2);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    } finally {
      setLoading(false);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <TextField
        fullWidth
        variant="outlined"
        value={display}
        disabled
        margin="normal"
      />
      <Grid container spacing={1}>
        {buttons.map((btn) => (
          <Grid item xs={3} key={btn}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => btn === '=' ? handleCalculate() : handleClick(btn)}
            >
              {btn}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
      {loading && (
        <CircularProgress
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-20px',
            marginLeft: '-20px',
          }}
        />
      )}
    </Paper>
  );
};

export default App;