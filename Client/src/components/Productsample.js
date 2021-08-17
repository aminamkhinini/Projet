import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import {CardGroup} from 'react-bootstrap';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth:345,
  },
});

export default function Productsample() {
    const classes = useStyles();
  
    const [product, setProduct ] = useState([ 
      {
        
       title:'chicco biberon',
      price:17.6,
      images:'http://localhost:5000/uploads/1628756798772-CHICCO BIBERON EN PLASTIQUE.jpg',
      },
      {
        title:'Chicco Lite Way',
       price:640,
       images:'http://localhost:5000/uploads/1628493909143-poussette.jpg',
       },
       {
        
        title:'3 couleurs',
       price:17,
       images:'http://localhost:5000/uploads/1628493698792-jeux pate.jpg',
       },
    
    ]
    );
    return (
        <div> 
          
<CardGroup className="card-group">
   {product.map(product=>(
 <Card className={classes.root} >
      <CardActionArea className="product-img">
        <CardMedia
          component="img"
          alt="image"
        
       
          image={product.images}
          title="image product"
          className="img"
        />
        </CardActionArea>
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2" className="title">
           {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="price">
           {product.price}DT
          </Typography>
          
             
        </CardContent>
      

    </Card>
            
   ))}


</CardGroup>
</div>)}