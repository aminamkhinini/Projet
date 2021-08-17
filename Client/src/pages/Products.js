
import React,{useEffect,useState} from 'react'
import {useSelector}  from 'react-redux'
import ProductCard from '../components/ProductCard';
import { Row, Col } from 'react-bootstrap'

import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

//import AddProduct from '../components/AddProduct'

//state/redux
import {useDispatch} from 'react-redux'
import { getProducts} from '../actions/productAction';


const Products = () => {
   
    const dispatch=useDispatch();
  useEffect(() => {
     dispatch(getProducts())  
  }, [])
  const products= useSelector(state =>state.products.products)

  console.log(products)

    return (

        <div className="container1">
        <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/> 
        
        <h2> Liste Des Produits </h2>
        <br/>
        
       
        <Row classname="row">
                    {products && products.map((product) => (
                        <Col key={product ? product._id :"id"} sm={12} md={6} lg={4} xl={3} className="col">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
          

</div>
    )
}
export default Products