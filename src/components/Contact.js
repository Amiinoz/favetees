import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


import AboutImage from '../assets/connect.jpg'



const useStyles = makeStyles((theme) => ({

  root: {
    width: '80%',
    display: 'inline-block',

    padding: '40px',
    transform: 'scale(0.8)',

  },

  media: {
    height: 140,
    paddingTop: '25%', // 16:9
    // paddingLeft: '5%'
  },




}));

export default function Contact() {
  const classes = useStyles();



  return (

    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={AboutImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'none' }}>
            info@favetees.com
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">Fallow us here</Typography>
        <IconButton aria-label="fallow us on twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Like us on Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="The gram">
          <InstagramIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
}
