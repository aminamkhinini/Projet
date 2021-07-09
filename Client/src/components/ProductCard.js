import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});





  


export default function ProductCard({product}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image"
          height="300"
          width="300"
          image={product.images}
          title="image product"
        />
        </CardActionArea>
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2">
           {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {product.price}TND
          </Typography>
          <Button variant="outline-info">
             <Link to={`/ProductDetails/${product._id}`}>ProductDetails</Link>  
             </Button>
        </CardContent>
      
        <Button variant="contained" color="secondary">
 Buy
</Button>

    </Card>
  );

}