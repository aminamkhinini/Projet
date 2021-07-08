
import { Carousel } from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import {useSelector}  from 'react-redux'



const Home = () => {
  
  

  //const [newProduct , setNewProduct ] = useState(

   // {product_id:'',
       // title:'',
        //price:'',
       // description:'',
        //images:'',
        //category:'',
        //countInStock:''
    //} 
  //)
  //const handleSubmit  =(newProduct) => {
   // setNewProduct([...products,newProduct])
   //};
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

     
<h1> Nos Conseils</h1>
<h1> Babylando</h1>
        </div>
    )
}

export default Home
