import React from 'react'
import Button from '@mui/material/Button';
import { Stepper, Step, StepLabel, Grid } from '@mui/material';

function UserInformation() {
  return (
    <Grid container>
    <Grid item xs={12}>
      <Stepper activeStep={0}>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </Grid>
    <Grid item xs={12}>
      {<>Hi</>}
    </Grid>
  </Grid>
  )
}

export default UserInformation
