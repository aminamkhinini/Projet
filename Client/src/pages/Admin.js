
import AddItem from '../components/AddItem'
import {useDispatch} from 'react-redux'
import { getItems} from '../actions/ItemAction';
import React,{useEffect,useState} from 'react'
import {useSelector}  from 'react-redux'
import ItemCard from '../components/ItemCard';
import {CardGroup} from 'react-bootstrap';
import {Modal,Button} from '@material-ui/core';

import { Card} from 'react-bootstrap'


const Admin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    const dispatch=useDispatch();
  useEffect(() => {
     dispatch(getItems())  
  }, [])
  const items= useSelector(state =>state.items.items)

  console.log(items)
    return (
        <div>
         <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/>
         <h1> Liste Des Articles </h1>
        <br/>
        <CardGroup className="card-group">
        
            {items && items.map((item)=> {
            return <ItemCard key={item._id}item={item} className="product"/>})}
 
</CardGroup>

<AddItem></AddItem>
{''} <Button type="button" onClick={handleOpen} variant="contained" color="secondary" > Modifier l'article</Button> {''} 
<Button type="button" onClick={handleOpen} variant="contained" color="secondary" > supprimer l'article</Button>     
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
