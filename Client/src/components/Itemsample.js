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

export default function Itemsample() {
    const classes = useStyles();
  
    const [item, setItem ] = useState([ 
      {
       title:'chicco biberon',
      price:26,
      images:'http://localhost:5000/uploads/1626001467152-CHICCO BIBERON EN PLASTIQU...',
      },
      {
        title:'4 protection de coins',
       price:13,
       images:'http://localhost:5000/uploads/1626457320207-4-protection-de-coins.jpg',
       },
       {
        title:'chaise haute mini plus',
       price:295,
       images:'http://localhost:5000/uploads/1626457026029-chaise-haute-mini-plus.jpg',
       },
    
    ]
    );
    return (
        <div> 
<CardGroup className="card-group">
   {item.map(item=>(
 <Card className={classes.root} >
      <CardActionArea className="item-img">
        <CardMedia
          component="img"
          alt="image"
          height="200"
       
          image={item.images}
          title="image product"
          className="img"
        />
        </CardActionArea>
        <CardContent>
       
          <Typography gutterBottom variant="h5" component="h2" className="title">
           {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="price">
           {item.price}DT
          </Typography>
          
             
        </CardContent>
      

    </Card>
            
   ))}


</CardGroup>
</div>)}