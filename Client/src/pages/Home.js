import { Carousel, Card,Row, Col } from "react-bootstrap";
import React from "react";
import {Link} from 'react-router-dom';


import Button from "@material-ui/core/Button";
import Productsample from '../components/Productsample';

const Home = () => {
  
  return (
    <div>
      <img
        src="logo/logoimg.png"
        alt="logo"
        Width="200"
        Height="200"
        className="logo"
      />
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-90"
            src="photos/bebe.jpg"
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
<br/>
      <h1> Nos Conseils</h1>
  <br/>    
  <Row classname="row">
            <Col ms className="col">
      <Card   className="card1">
        <Card.Img variant="top" src="images/collier1.jpg"  className="img" />
        <Card.Body>
          <Card.Title>Bébé a mal aux dents:que penser du collier d’ambre ?</Card.Title>
          <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> <p> Voir plus de détails</p> </Link>  
            </Button>
        </Card.Body>
      </Card>
      </Col>
      <Col ms className="col">
      <Card   className="card1">
        <Card.Img variant="top" src="images/femme.jpg"className="img"/>
        <Card.Body>
          <Card.Title>L’alimentation pendant la grossesse </Card.Title>
          <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> <p> Voir plus de détails</p></Link>  
            </Button>
        </Card.Body>
      </Card>
      </Col>
      <Col ms className="col"> 
      <Card className="card1">
        <Card.Img variant="top" src="images/enceinte.jpg"className="img" />
        <Card.Body>
          <Card.Title>Comment bien dormir pendant la grossesse</Card.Title>
          <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> <p> Voir plus de détails</p></Link>  
            </Button>
        </Card.Body>
      </Card>
      
      </Col>
      <Col ms className="col">
      <Card   className="card1">
        <Card.Img src="images/fievre.jpg" className="img" />
        <Card.Body>
          <Card.Title>La Fièvre</Card.Title>
          <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> <p> Voir plus de détails</p></Link>  
            </Button>
        </Card.Body>
      </Card>
    </Col>         
                </Row>

 
   



      <br/>
      <h1> babylando</h1>
      <br/>
      <Card>
        <Card.Body>
          La boutique complète pour votre bébé Offrant un éventail complet
          d’articles et d’accessoires, de décoration et de vêtements pour bébé,
          la boutique virtuelle très conviviale de babylando permet de trouver
          tous les ingrédients de qualité pour préparer la venue de votre
          nouveau-né. Forte de ses compétences acquises au fil des années, la
          boutique en ligne de babylando vous offre une large gamme de produits
          de qualité répondant aux normes de sécurité canadiennes. babylando
          est à l’affût de toutes les nouvelles tendances qui sauront combler
          vos attentes; poussette, siège d’auto, décoration pour la chambre
          d’enfants, accessoires pour l’allaitement, vêtements, jouets et
          cadeaux. Innovant dans le domaine, babylando met à votre disposition
          un lieu regroupant toute l’information pour vous préparer à l’arrivée
          de votre nouveau-né, les conseils pour les nouveaux parents et la
          liste de naissance.
        </Card.Body>
      </Card>
      <br/>
<h1>Nos Articles</h1>
<br/>
        
    <Productsample></Productsample>        


</div>)}

export default Home;
