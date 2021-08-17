
import AddProduct from '../components/AddProduct'
import UpdateProduct from'../components/UpdateProduct'
import {useDispatch} from 'react-redux'
import {getProducts,delete_product} from '../actions/productAction';
import React,{useEffect} from 'react'
import {useSelector}  from 'react-redux'


import {Row,Col,Card} from 'react-bootstrap';
import {Button} from '@material-ui/core';

import {Link} from 'react-router-dom';








const Admin = () => {

  const products= useSelector(state =>state.products.products)

  const dispatch=useDispatch();
useEffect(() => {
   dispatch(getProducts())  
}, [])
    const handleSubmit = async (e,id) => {
      e.preventDefault();
   console.log(id)
     dispatch(delete_product(id));
    
      alert('Product deleted successfully');
  }
    
      

  
    return (
        <div>
         <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/>
     <h2> Page Admin </h2>
        
        <br/>
        <Row >
                    {products && products.map((product) => (
                        <Col key={product ? product._id :"id"} sm={12} md={6} lg={4} xl={3} className="col">
                             <Card className='my-3 p-3 rounded card2'>
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
  
            <UpdateProduct product={product}> </UpdateProduct>
              <br/>
              <Button type='submit' variant="outlined" onClick={(e)=>handleSubmit(e,product._id)}color="secondary">supprimer  </Button>
        </Card>
                        </Col>
                    ))}
                </Row>
     
           <br/>

<AddProduct></AddProduct>
<br/>


        </div>
       
    )}

export default Admin
