import React, { useEffect } from 'react'
import { Link,useParams} from 'react-router-dom'
// React Bootstrap
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
// Redux state
import { useDispatch, useSelector } from 'react-redux'

// Redux Actions
import { addToCart, removeFromCart } from '../actions/cartAction'

const Cart = ({ match, location, history }) => {
 
const productId=match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        // console.log('remove')
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h5>Panier d'Achat</h5>
                {cartItems.length === 0 ? (
                    <>
                        votre catre est vide
                        <br/>
                         <Link to='/Products'>Revenir en Arrière</Link>
                    </>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.images}
                                            alt={item.title}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.title}
                                        </Link>
                                    </Col>
                                    <Col md={2}>{item.price} DT</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as='select'
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        item.product,
                                                        Number(e.target.value)
                                                    )
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
                                                ).keys(),
                                            ].map((p) => (
                                                <option
                                                    key={p + 1}
                                                    value={p + 1}
                                                >
                                                    {p + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h5>
                                Subtotal (
                                   {cartItems.reduce(
                                    (acc, item) => acc + item.qty,
                                    0
                                )}DT
                                )  articles
                            </h5>
                          
                            {cartItems
                                .reduce(
                                    (acc, item) => acc + item.qty * item.price,
                                    0
                                )
                                .toFixed(2)}DT
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Passez à la caisse
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default Cart
                 


