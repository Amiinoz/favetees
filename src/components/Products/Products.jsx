import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'



const products = [
  { id:1, name:'tees', description:'ain.', price:'$55', image:'https://unsplash.com/photos/RTr1c-ZLe0c', },
  // { id:1, name:'tees', description:'ain.', price:'$55', image:'/src/images/ain.jpeg', },
  { id:2, name:'tees', description:'ayo.', price:'$39', image: '/src/images/ayo.jpeg'},
  { id:3, name:'tees', description:'bant.', price:'$55', image: '/src/images/bant.jpg'},
  { id:4, name:'tees', description:'gal.', price:'$45', image: '/src/images/gal.jpeg'},
  { id:5, name:'tees', description:'jul.', price:'$55', image: '/src/images/jul.jpg'},
  { id:6, name:'tees', description:'taller.', price:'$67', image: '/src/images/taller.jpeg'},
]

const Products = () => {
  return(
    <main>
    <Grid  container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
          </Grid>
        ))}
    </Grid>
  </main>
  )

}

export default Products
