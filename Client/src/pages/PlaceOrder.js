import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

// Create order action
import { createOrder } from '../actions/orderAction'

import { ORDER_CREATE_RESET } from '../actions/types'
import { USER_DETAILS_RESET } from '../actions/types'

import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrder = ({ history }) => {
    const dispatch = useDispatch()

    // Get items from the cart
    const cart = useSelector((state) => state.cart)

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    // Calculate prices
    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    // Calculate shipping prices
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10)

    // Calculate tax
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

    // Total price
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.createOrder)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
            dispatch({ type: USER_DETAILS_RESET })
        }
        // eslint-disable-next-line
    }, [history, success])

    const placeOrderHandler = () => {
        console.log('Placed order')
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>Expédition</h4>
                            <p>
                                <strong>Addresse: </strong>
                                {cart.shippingAddress.address},{' '}
                                {cart.shippingAddress.city}{' '}
                                {cart.shippingAddress.postalCode},{' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Methode de Payment </h4>
                            <p>
                            <strong>Methode: </strong>
                            {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Commander des articles</h4>
                            {cart.cartItems.length < 0 ? (
                                <Message>Votre carte est vide</Message>
                            ) : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={7}>
                                                    <Image
                                                        src={item.images}
                                                        alt={item.title}
                                                        fluid
                                                        rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link
                                                        to={`/product/${item.product}`}
                                                    >
                                                       <h5>{item.title} </h5> 
                                                    </Link>
                                                </Col>
                                                <Col md={10}>
                                                    {item.qty} x  {item.price}DT{' '}
                                                    = {item.qty * item.price}DT
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={5}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h4>Résumé de la commande</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Articles</Col>
                                    <Col>{cart.itemsPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Expédition</Col>
                                    <Col>{cart.shippingPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Taxe</Col>
                                    <Col>{cart.taxPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>{cart.totalPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && (
                                    <Message variant='danger'>{error}</Message>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrderHandler}
                                >
                                    Passer à la commande
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrder