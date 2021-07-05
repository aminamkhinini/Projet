import React from 'react';
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
           {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {product.price}TND
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {product.category}
          </Typography>

        </CardContent>
      
        <Button variant="contained" color="secondary">
 Buy
</Button>
<Button variant="contained">View</Button>
    </Card>
  );

}