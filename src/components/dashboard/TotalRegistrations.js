import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { green } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const TotalRegistrations = (props) => (
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
                        Total Registrations
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                    >
                        {props.analyticsData.registration ? props.analyticsData.registration.total : ''}

                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: green[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <PeopleIcon />
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
                        Age 18-44
                    </Typography>
                    <Typography
                        sx={{
                            color: '#787878',
                            mr: 1,
                            fontWeight: 'bold'
                        }}
                        variant="body2"
                    >
                        {props.analyticsData.registration ? props.analyticsData.registration.cit_18_45 : ''}

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
                        Age 45+
                    </Typography>
                    <Typography
                        sx={{
                            color: '#787878',
                            mr: 1,
                            fontWeight: 'bold'
                        }}
                        variant="body2"
                    >
                        {props.analyticsData.registration ? props.analyticsData.registration.cit_45_above : ''}

                    </Typography>

                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default TotalRegistrations;
