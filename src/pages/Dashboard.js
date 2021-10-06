import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import TotalVaccination from 'src/components/dashboard//TotalVaccination';
import SitesConductingVaccination from 'src/components/dashboard//SitesConductingVaccination';
import TotalRegistrations from 'src/components/dashboard//TotalRegistrations';
import NearestVaccinationCenterTabs from './NearestVaccinationCenter/NearestVaccinationCenterTabs'
import { getStates, getAnalytics } from '../components/apis/data';
const Dashboard = () => {
  const [states, setstates] = useState([]);
  const [analyticsData, setAnalyticsData] = useState([])

  useEffect(() => {
    getStates(postGettingStates, {})
    getAnalytics(postGettingAnalytics);
  }, [])

  const postGettingStates = (response) => {
    const replaceMap = { "stateName": "title" }
    if (response.data.success) {
      setstates(replaceKeyInObjectArray(response.data.data.states, replaceMap));
    }
    
  }
  const postGettingAnalytics = (response) =>{
    console.log(response)
    setAnalyticsData(response.data? response.data.topBlock:[]);
  }

  let replaceKeyInObjectArray = (a, r) => a.map(o =>
    Object.keys(o).map((key) => ({ [r[key] || key]: o[key] })
    ).reduce((a, b) => Object.assign({}, a, b)))



  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalVaccination analyticsData={analyticsData}/>
            </Grid>
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <SitesConductingVaccination analyticsData={analyticsData}/>
              
            </Grid>
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalRegistrations analyticsData={analyticsData}/>
            </Grid>
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <NearestVaccinationCenterTabs states={states} />
            </Grid>


          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default Dashboard;
