import {React,Fragment, useState } from 'react';

import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getOrders } from '../actions/orderAction';
import {Card,Alert, Container} from 'react-bootstrap';


 const Orders = () => {

    const order = useSelector(state => state.order)
    const isAuth = useSelector(state=> state.auth.isAuth);

    const user = useSelector(state => state.auth.user);
const [orders, setorders] = useState()




 

    const ongetOrders = async (id) => {
        await getOrders(id);
     
    }

        if(isAuth ){
            ongetOrders(user._id);
        }
    return (
        <div>
            {isAuth ?
                    <Fragment>
                        {orders!==[] ? null :
                            <Alert color="info" className="text-center">You have no orders!</Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }

                {isAuth && order.length ?
                    <Container>
                        <div className="row">
                            {orders.map((order)=>(
                                <div className="col-md-12">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title tag="h4">{order.items.length} items - Total cost: Rs. {order.bill}</Card.Title>
                                            <div className="row">
                                            {order.items.map((item)=>(
                                                <div className="col-md-4">
                                                    <Card className="mb-2">
                                                        <Card.Body>
                                                            <Card.Title tag="h5">{item.name} ({item.quantity} pieces)</Card.Title>
                                                            <Card.Subtitle tag="h6">Rs. {item.price}/piece</Card.Subtitle>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                </div>
                                
                            ))}
                        </div>
                    </Container>
                :null}
            </div>
        )
    }
     export default Orders 




  

  
    

    