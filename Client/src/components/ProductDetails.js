

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector}  from 'react-redux'
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


const ProductDetails = ({ products, match, history }) => {
    const classes = useStyles();
   console.log(products)

  return (
      
    <div className="description">
      <h1> Product Details </h1>
     
   
    
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image"
          height="300"
          width="300"
          image={products.find((product) => product._id === match.params.id).images}
          title="image product"
        />
        </CardActionArea>
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2">
      {products.find((product) => product._id === match.params.id).title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {products.find((product) => product._id === match.params.id).price}TND
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {products.find((product) => product._id === match.params.id).description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {products.find((product) => product._id === match.params.id).category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        {products.find((product) => product._id === match.params.id).countInStock}
          </Typography>
        </CardContent>
        </Card>
    

        <Button variant="success" onClick={() => history.push("/")}>
      Home Page
        </Button>
      
    </div>
  );
};
export default ProductDetails;