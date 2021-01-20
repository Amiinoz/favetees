import React from 'react';
import Grid from '@material-ui/core';

import Product from './Product/Product'

const products = [
  {
    id: 1, name: 'tees', description: 'mm tee', price: '$65'
  },
    {
    id: 2, name: 'hats', description: 'bw tee', price: '$75'
  },
    {
    id: 3, name: 'shorts', description: 'flower tee', price: '$55'
  },
];

const Products = () => {
  <main>
    <Grid container justify= 'center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}

    </Grid>
  </main>
}

export default Products
