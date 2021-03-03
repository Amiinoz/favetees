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


import AboutImage from '../assets/aboutus.jpg'



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

export default function About() {
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
            Our story
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'none' }}>
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

            Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

            Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
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
