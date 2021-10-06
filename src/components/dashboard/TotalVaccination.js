import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

const TotalVaccination = (props) => {
  console.log('props', props)
  return (

    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Total Vaccination Doses
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {props.analyticsData.vaccination ? props.analyticsData.vaccination.total : ''}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              sx={{
                // color: red[900],
                mr: 1
              }}
              variant="body2"
            >
              Dose 1
            </Typography>
            <Typography
              sx={{
                color: '#787878',
                mr: 1,
                fontWeight: 'bold'
              }}
              variant="body2"
            >
              {props.analyticsData.vaccination ? props.analyticsData.vaccination.tot_dose_1
                : ''}

            </Typography>

          </Box>

          <Box
            sx={{
              pt: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              sx={{
                // color: red[900],
                mr: 1
              }}
              variant="body2"
            >
              Dose 2
            </Typography>
            <Typography
              sx={{
                color: '#787878',
                mr: 1,
                fontWeight: 'bold'
              }}
              variant="body2"
            >
              {props.analyticsData.vaccination ? props.analyticsData.vaccination.tot_dose_2 : ''}

            </Typography>

          </Box>
        </Box>
      </CardContent>
    </Card>
  )
};

export default TotalVaccination;
