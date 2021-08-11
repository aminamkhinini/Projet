import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Bootstrap Components
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

// Redux Actions
import { listProductDetails } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ history, match}) => {
   

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const {loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    
    return (
        <>
        
        <Link className='btn btn-secondary my-3' to='/Products'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
           
                <Row>
                    <Col md={6}>
                        <Image
                            src={product && product.images}
                            alt="image product"
                            fluid
                        ></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product && product.title}</h3>
                         
                                Prix: {product && product.price} DT
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product && product.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                               Categorie: {product && product.category}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Prix:</Col>
                                        <Col>
                                            <strong>{product && product.price}DNT</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product && product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product && product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(e.target.value)
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countInStock
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
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button
                                        disabled={product && product.countInStock === 0}
                                        className='btn-block'
                                        type='button'
                                        onClick={addToCartHandler}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
              </>
    )
}

export default ProductScreen