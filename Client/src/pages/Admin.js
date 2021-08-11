
import AddProduct from '../components/AddProduct'
import UpdateProduct from'../components/UpdateProduct'
import {useDispatch} from 'react-redux'
import {getProducts,delete_product} from '../actions/productAction';
import React,{useEffect} from 'react'
import {useSelector}  from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import {Row,Col} from 'react-bootstrap';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import { Card} from 'react-bootstrap'
const useStyles = makeStyles({
  root: {
    maxWidth:400,
    
  },
});


const Admin = () => {
  const classes = useStyles();
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
     
         <h1> Liste Des Articles </h1>
        <br/>
        
      <Row>
        
            {products && products.map((product)=> {
            return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Card className={classes.root} >
            <CardActionArea className="product-img">
           
              <CardMedia
                component="img"
                alt="image"
               // height="400"//
             
                image={product.images}
                title="image product"
                className="img"
                
              />
      
              </CardActionArea>
              <CardContent>
             
              <Link to={`/ProductScreen/${product._id}`} className="link">  <Typography gutterBottom variant="h5" component="h2" className="title">
                 {product.title}
                </Typography></Link>
                <Typography variant="body2" color="textSecondary" component="p" className="price">
                 {product.price}DT
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p"className="category" >
                 {product.category}
                </Typography>
                
              </CardContent>
            
              <UpdateProduct product={product}> </UpdateProduct>
              <br/>
              <Button type='submit' variant="outlined" onClick={(e)=>handleSubmit(e,product._id)}color="secondary">supprimer  </Button>
              
          </Card>
          </Col>
        })}
           
           
           </Row>
           <br/>

<AddProduct></AddProduct>
<br/>


        </div>
       
    )}

export default Admin
