
import React,{useEffect,useState} from 'react'
import {useSelector}  from 'react-redux'
import ProductCard from '../components/ProductCard';
import { CardDeck } from 'react-bootstrap';
//state/redux
import {useDispatch} from 'react-redux'
import {getProducts} from '../actions/ProductAction';

const Products = () => {

    const dispatch=useDispatch();
  useEffect(() => {
     dispatch(getProducts())  
  }, [])
  const products= useSelector(state =>state.products.products)

  console.log(products)

    return (
        <div>
        <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/> 
        
        <h1> List Products </h1>
        <CardDeck className="List Products" >  
            {products && products.map((product)=> {
            return <ProductCard key={product._id} product={product}/>})}
           
         </CardDeck>
      
        </div>
    )
}

export default Products