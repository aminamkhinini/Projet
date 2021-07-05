
import { Carousel } from 'react-bootstrap'
import React,{useEffect} from 'react'
import {useSelector}  from 'react-redux'
import ProductCard from '../components/ProductCard';

//state/redux
import {useDispatch} from 'react-redux'
import {getProducts} from '../actions/ProductAction';
const Home = () => {
  
  const dispatch=useDispatch();
  useEffect(() => {
     dispatch(getProducts())
  }, [])
  const products= useSelector((state) =>state.ProductReducer.products)
  console.log(products)
    return (
        <div>
          
           <img src="logo/logoimg.png" alt="logo" Width="200" Height="200"  className="logo"/>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="photos/baby1.jpg"
      alt="First slide"
  
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="photos/baby2.jpg"
      alt="Second slide"
 
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="photos/baby3.jpg"
      alt="Third slide"
    
    />

    
  </Carousel.Item>
</Carousel>

        <h1> List Products </h1>
        <div style={{display:'flex', justifyContent:'space-around'}}> 
            {products && products.map((product)=> {
            return <ProductCard key={product._id} product={product}/>})}
           
        </div>
<h1> Nos Conseils</h1>
<h1> Babylando</h1>
        </div>
    )
}

export default Home
