
import React from 'react'
import { Card } from 'react-bootstrap'


import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded card1'>
        <Link to={`/ProductScreen/${product? product._id: "id"}`} className="link">
                <Card.Img src={product && product.images} variant='top' className="img"/>
            </Link>
            <Card.Body>
            <Link to={`/ProductScreen/${product? product._id: "id"}`} className="link">
                    <Card.Title  className="title">
                        <strong> <h5> {product && product.title}</h5></strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                <Card.Text as='h5'className="price">{product && product.price}DT</Card.Text>
                <Card.Text as='h5' className="category">{product && product.category}</Card.Text>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard
