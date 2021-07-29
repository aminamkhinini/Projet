import { React, Fragment,useState } from 'react';

import {Card, Alert, Container} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { getCart, deleteFromCart } from '../actions/cartAction';
import Checkout from '../components/Checkout';
import { addToCart} from '../actions/cartAction'
import { checkout } from '../actions/orderAction'
;
import { useSelector} from 'react-redux'


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
         babylando
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Cart(match) {
   
    
  
    const cart = useSelector(state => state.cart)
    const isAuth = useSelector(state=> state.auth.isAuth);

    const user = useSelector(state => state.auth.user);
    const items= useSelector(state =>state.items.items)
    const getCartItems = async (id) => {
        await getCart(id);
        
        
    }
    const addCartItems=async(id, productId, quantity)=>{
      await  addToCart(id, productId, quantity);
    }
    
    const onDeleteFromCart = (id, itemId) => {
        deleteFromCart(id, itemId);
    } 
    
    
            if(isAuth){
                getCartItems(user._id);
            }
    return (
        <div>
             
                {isAuth ?
                    <Fragment>
                        {cart ? null :
                            <Alert color="info" className="text-center">votre carte est vide!
                             <Link to="/items"> Shopping</Link>
                            </Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }  
        
            
                {isAuth  &&   cart?
                <Container>
                    <div className="row">
                        {items.map((item)=>(
                            <div className="col-md-4">
                                <Card style={{ width: '18rem' }}>

                           <Card.Body>
                           <Card.Img component="img"
          
          src={item.images}
          
         />
                           <Card.Title>{item.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Rs.{item.price}TND</Card.Subtitle>
                          <Card.Text>
                          Quantity - {item.quantity}
                          </Card.Text>
                       <Button color="danger" onClick={onDeleteFromCart}>supprimer</Button>
                       </Card.Body>
                       </Card>
                       
                        <br/>
                        </div>
                        ))}
                        <div class="col-md-12">
                            <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>coût total= Rs.{cart.bill}</Card.Title>
    <Checkout
                                    user={user._id}
                                    amount={cart.bill}
                                    checkout={checkout}
                                />   
   
  </Card.Body>
</Card>
                       
                        </div>
                    </div>
                </Container>
                    :null}
                 <footer> 
      <Card style={{ backgroundColor: "pink" }}>
        <Card.Body>
          <Card.Title className="card-title">Conseils</Card.Title>
          <Card.Text>
          <Link to={`/Conseils`} className="link"> <h5>Bébé a mal aux dents : que penser du collier d’ambre ? </h5> </Link> 
          <Link to={`/Conseils`} className="link"> <h5> La Fièvre</h5> </Link> 
          <Link to={`/Conseils`} className="link"> <h5>Comment bien dormir pendant la grossesse </h5> </Link> 
          </Card.Text>

          <Card.Title>Assistance</Card.Title>
          <Card.Text>
            <p>
              {" "}
              Vous avez besoin d'aide ? Appelez-nous au (+216) 93 507 078 | Toute
              la semaine de 9h à 20h. babylando@gmail.com
            </p>
          </Card.Text>
          <Button variant="primary">Allez vers le haut</Button>
        </Card.Body>
        <Box mt={8}>
        <Copyright />
      </Box>
      </Card>
      </footer>
            </div>
          
          
        )
    }



