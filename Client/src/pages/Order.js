
  
import React, { useEffect, useState } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../actions/types'

// Get order details actions
import { getOrderDetails, payOrder } from '../actions/orderAction'

const Order = ({ match, history }) => {
    // Get order id parameter from URL
    const orderId = match.params.id

    // Boolean used to determine if the PayPal SDK has loaded
    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()

    // Get order details from state
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

    // Get order payment status
    const orderPay = useSelector((state) => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    if (!loading) {
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        }

     order.itemsPrice = addDecimals(
            order.orderItems.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            )
        )

        order.shippingPrice = addDecimals(order.shippingPrice)

        order.taxPrice = addDecimals(order.taxPrice)
    }

    useEffect(() => {
        const addPayPalScript = async () => {
            //const { data } = await axios.get('/config/paypal')
        console.log(("order===",order))
            const data = 'AQgRx2bzsyTh28GMqLus9zi3BPfELy6GCNMDirZN9kr8QpFCPQBDSgDwIqQgaUbIac93T45p0Uo0Ly0P' 
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}&currency=USD`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }

        if (!order || successPay || order._id !== orderId) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(orderId))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, orderId, order, successPay])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        // Update status of order to paid
        dispatch(payOrder(orderId, paymentResult))
    }
    
const name = useSelector((state) => state.auth.userInfo.user.name)
const email = useSelector((state) => state.auth.userInfo.user.email)
    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            <h3>Commande {orderId}</h3>
            <Row>
                <Col md={7}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>Expédition</h3>
                            <p>
                                <strong>Nom: </strong>
                                {order.user && order.user.name}
                            </p>
                             
                            <p>
                                <strong>Email: </strong>
                                {order.user && order.user.email}
                            </p>
                            <p>
                                <strong>Addresse: </strong>
                                {order.shippingAddress.address},{' '}
                                {order.shippingAddress.city}{' '}
                                {order.shippingAddress.postalCode},{' '}
                                {order.shippingAddress.country}
                                {order.isDelivered ? (
                                    <Message variant='success'>
                                        Delivered on {order.deliveredAt}
                                    </Message>
                                ) : (
                                    <Message variant='danger'>
                                        Non Deliveré
                                    </Message>
                                )}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Methode de Payment </h2>
                            <p>
                                <strong>Methode: </strong>
                                {order.paymentMethod}
                                {order.isPaid ? (
                                    <Message variant='success'>
                                        Paid on {order.paidAt}
                                    </Message>
                                ) : (
                                    <Message variant='danger'>Non Payé</Message>
                                )}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Articles Commandés</h3>
                            {order.orderItems.length === 0 ? (
                                <Message>La Commande est vide</Message>
                            ) : (
                                <ListGroup variant='flush'>
                                    {order.orderItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={3}>
                                                    <Image
                                                        src={item.images}
                                                        alt={item.title}
                                                        fluid
                                                        rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link style={{fontFamily: 'Roboto, sans-serif',fontStyle: 'italic'}}
                                                        to={`/product/${item.product}`}
                                                    >
                                                        {item.title}
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
                                <h3>Résumé de la commande</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Articles</Col>
                                    <Col>{order.itemsPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Expédition</Col>
                                    <Col>{order.shippingPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Taxe</Col>
                                    <Col>{order.taxPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>{order.totalPrice}DT</Col>
                                </Row>
                            </ListGroup.Item>
                            {!order.isPaid && (
                                <ListGroup.Item>
                                    {loadingPay && <Loader />}
                                    {!sdkReady ? (
                                        <Loader />
                                    ) : (
                                        <PayPalButton
                                            amount={order.totalPrice}
                                            onSuccess={successPaymentHandler}
                                        />
                                    )}
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                {error && (
                                    <Message variant='danger'>{error}</Message>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Order
