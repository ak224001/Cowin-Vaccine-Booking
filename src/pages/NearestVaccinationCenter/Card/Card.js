import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
  root: {
    minWidth: 130,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{display:'flex',justifyContent:'center'}} gutterBottom>
          {props.session && props.session.date}
        </Typography>
        <Divider style={{marginBottom:'5px'}}/>
        <Typography variant="h6" component="h2" gutterBottom>
          Available Capacity - {props.session && props.session.availableCapacity}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Min Age Limit - {props.session && props.session.minAgeLimit}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Vaccine - {props.session && props.session.vaccine}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          availableCapacityDose1 - {props.session && props.session.availableCapacityDose1}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          availableCapacityDose2 - {props.session && props.session.availableCapacityDose2}
        </Typography>
        {/* <Typography variant="h5" component="h2" >
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
      </CardContent>

    </Card>
  );
}
