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
    maxWidth:400,
    
  },
});





  


export default function ItemCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea className="item-img">
     
        <CardMedia
          component="img"
          alt="image"
          height="400"
       
          image={item.images}
          title="image product"
          className="img"
          
        />

        </CardActionArea>
        <CardContent>
       
        <Link to={`/ItemDetails/${item._id}`} className="link">  <Typography gutterBottom variant="h5" component="h2" className="title">
           {item.title}
          </Typography></Link>
          <Typography variant="body2" color="textSecondary" component="p" className="price">
           {item.price}DT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"className="category" >
           {item.category}
          </Typography>
          
        </CardContent>
      

    </Card>
  );

}