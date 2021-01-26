import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {
    id: 0,
    name: 'ain',
    description: 'ain.',
    price: '$55',
    image: './Product/images/bant.jpg',
  },
  {
    id: 1,
    name: 'p2',
    description: 'ain.',
    price: '$55',
    image: './Product/images/jul.jpg',
  },
  // {
  //   id: 2,
  //   name: 'tees',
  //   description: 'ayo.',
  //   price: '$39',
  //   image: './Product/images/bant.jpg',
  // },
  // {
  //   id: 3,
  //   name: 'tees',
  //   description: 'bant.',
  //   price: '$55',
  //   image: './Product/images/bant.jpg',
  // },
  // {
  //   id: 4,
  //   name: 'tees',
  //   description: 'gal.',
  //   price: '$45',
  //   image: './Product/images/bant.jpg',
  // },
  // {
  //   id: 5,
  //   name: 'tees',
  //   description: 'jul.',
  //   price: '$55',
  //   image: './Product/images/bant.jpg',
  // },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
