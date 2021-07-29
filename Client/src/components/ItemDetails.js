


import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector}  from 'react-redux'
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {addToCart} from '../actions/cartAction';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//redux
import {useDispatch} from 'react-redux';


const useStyles = makeStyles({
  root: {
    maxWidth:800,
    display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-around',
  padding:'10',
  margin:'20',
   
  
  },
});



       
export default function ItemDetails  ({match, history}) {
  const dispatch=useDispatch();
  const classes = useStyles();
 
 

  const handleAddToCart = async (id, productId,quantity) => {
    dispatch (addToCart(id, productId, 1));
    alert ('Item added to Cart');
  }
  const items = useSelector(state => state.items.items)
   console.log(items)
  
  

  return (
      
    <div className="description">
      <h1> Détails de l'article </h1>
     
   
    
      <Card  className={classes.root}>
        
      <CardActionArea className="Area">
        <CardMedia
          component="img"
          alt="image"
          height="100%"
          image={items.find((item) => item._id === match.params.id).images}
          title="images item"
        
        />
        </CardActionArea>
        <CardContent className="content">
       
          <Typography gutterBottom variant="h5" component="h2" className="title1">
      Title:{items.find((item) => item._id === match.params.id).title} 
          </Typography>
          <Typography variant="h5"  component="h2"className="price1">
           Price:{items.find((item) => item._id === match.params.id).price}DT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"className="desc">
         Description: {items.find((item) => item._id === match.params.id).description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"className="categ">
        Catégorie: {items.find((item) => item._id === match.params.id).category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"className="stock">
        Quantité en stock:{items.find((item) => item._id === match.params.id).countInStock}
        </Typography>
       
                              
        
        </CardContent>
        </Card>
   
  
        <Button  type="submit" 
            variant="outlined"
            color="secondary"onClick={handleAddToCart} className="btn"> Ajouter au panier </Button>
 <br/>
        <Button variant="outlined"
            color="secondary" onClick={() => history.push("/cart")}>
   Panier
        </Button>
      
      
    </div>
  );
};
