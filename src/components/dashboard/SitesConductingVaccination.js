import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { orange, red } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const SitesConductingVaccination = (props) => (
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
                        Sites Conducting Vaccination
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                    >
                        {props.analyticsData.sites ? props.analyticsData.sites.total : ''}

                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: orange[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <InsertChartIcon />
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
                        Government
                    </Typography>
                    <Typography
                        sx={{
                            color: '#787878',
                            mr: 1,
                            fontWeight: 'bold'
                        }}
                        variant="body2"
                    >
                        {props.analyticsData.sites ? props.analyticsData.sites.govt : ''}

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
                        Private
                    </Typography>
                    <Typography
                        sx={{
                            color: '#787878',
                            mr: 1,
                            fontWeight: 'bold'
                        }}
                        variant="body2"
                    >
                        {props.analyticsData.sites ? props.analyticsData.sites.pvt : ''}

                    </Typography>

                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default SitesConductingVaccination;
