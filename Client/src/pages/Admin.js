
import AddItem from '../components/AddItem'
import UpdateItem from'../components/UpdateItem'
import {useDispatch} from 'react-redux'
import { getItems,updateItem,deleteItem} from '../actions/ItemAction';
import React,{useEffect,useState} from 'react'
import {useSelector}  from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from '../components/ItemCard';
import {CardGroup} from 'react-bootstrap';
import {Modal,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import { Card} from 'react-bootstrap'
const useStyles = makeStyles({
  root: {
    maxWidth:400,
    
  },
});


const Admin = () => {
  const classes = useStyles();
  const items= useSelector(state =>state.items.items)

  const dispatch=useDispatch();
useEffect(() => {
   dispatch(getItems())  
}, [])
    const handleSubmit = async (e,id) => {
      e.preventDefault();
   console.log(id)
     dispatch(deleteItem(id));
    
      alert('Item deleted successfully');
  }
    
      

  
    return (
        <div>
         <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/>
     
         <h1> Liste Des Articles </h1>
        <br/>
        
        <CardGroup className="card-group">
        
            {items && items.map((item)=> {
            return <Card className={classes.root} >
            <CardActionArea className="item-img">
           
              <CardMedia
                component="img"
                alt="image"
               // height="400"//
             
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
            
              <UpdateItem item={item}> </UpdateItem>
              <br/>
              <Button type='submit' variant="outlined" onClick={(e)=>handleSubmit(e,item._id)}color="secondary">supprimer  </Button>
              
          </Card>
         
        })}
           
           
</CardGroup>

<AddItem></AddItem>
<br/>

<Card style={{backgroundColor:"pink"}}>

<Card.Body >
  <Card.Title className="card-title">Conseils</Card.Title>
  <Card.Text>
  <h5>Bébé a mal aux dents : que penser du collier d’ambre ? </h5>
  <h5> Eviter dehydratation</h5>
  <h5>Comment bien dormir pendant la grossesse </h5>
  </Card.Text>


<Card.Title>Assisstance</Card.Title>
  <Card.Text>
 <p> ous avez besoin d'aide ? Appelez-nous au (+216) 93 507 078 | Toute la semaine de 9h à 20h.
  babylando@gmail.com</p> 
  </Card.Text>
  <Button type="submit" 
          variant="contained"
          color="secondary"className="btn">vers le haut</Button>
  </Card.Body>
  <a href="http://copyright.be" target="_blank" style={{textAlign:"center",color:"black"}}>Copyright © 2021 babylando - Tous droits réservés </a>
</Card>
)
        </div>
       
    )}

export default Admin
