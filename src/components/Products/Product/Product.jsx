import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCart } from '@material-ui/icons';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
// import classes from '*.module.css';

import useStyles from './styles';

const Product = ({ product }) => {
	const classes = useStyles();

	return (
  <Card className={classes.root}>
		<CardMedia className={classes.media} image='' title={product.name}/>
		<CardContent>
				<div className={classes.CardContent}>
						<Typography variant='h5' gutterBottom>
								{product.name}
						</Typography>
						<Typography variant='h5' >
								{product.price}
						</Typography>
				</div>
				<Typography variant='h2' color='textSecondary'>{product.description}</Typography>
		</CardContent>
		<CardActions disableSpacing className={classes.cardActions}>
					<IconButton aria-label='Add to Cart'>
							<AddShoppingCart />
					</IconButton>
		</CardActions>

  </Card>
	);
};

export default Product;
