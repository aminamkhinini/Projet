import { Carousel, Card, CardGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Itemsample from '../components/Itemsample';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       babylando
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
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
      <CardGroup className="home-conseil">
        <div className="box1"> 
        <Card style={{ width: "400px" }} className="card1">
          <Card.Img variant="top" src="images/collier1.jpg" />
          <Card.Body>
            <Card.Title>Bébé a mal aux dents:que penser du collier d’ambre ? </Card.Title>

            <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> Read more</Link>  
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "400px" }}className="card1">
          <Card.Img variant="top" src="images/femme.jpg" styele={{width:"225px",height:"225 px"}}/>
          <Card.Body>
            <Card.Title>L’alimentation pendant la grossesse :</Card.Title>

            <Button variant="primary" >
            <Link to={`/Conseils`} className="link">Voir plus de détails</Link>  
            </Button>
          </Card.Body>
        </Card>
        </div>
        <div className="box1"> 
        <Card style={{ width: "400px" }}className="card1">
          <Card.Img variant="top" src="images/enceinte.jpg" />
          <Card.Body>
            <Card.Title>Comment bien dormir pendant la grossesse</Card.Title>

            <Button variant="primary" >
            <Link to={`/Conseils`} className="link"> Voir plus de détails</Link>  
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "400px" }}className="card1">
          <Card.Img variant="top" src="images/fievre.jpg" />
          <Card.Body>
            <Card.Title>La Fièvre</Card.Title>

            <Button variant="primary" >
            <Link to={`/Conseils`} className="link">Voir plus de détails</Link>  
            </Button>
          </Card.Body>
        </Card>
        </div>
      </CardGroup>
      <h1> babylando</h1>
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
<h1>Nos Articles</h1>
 <CardGroup className="card-group">
        
    <Itemsample></Itemsample>        


</CardGroup>
<footer> 
      <Card style={{ backgroundColor: "pink" }}>
        <Card.Body>
          <Card.Title className="card-title">Conseils</Card.Title>
          <Card.Text>
          <Link to={`/Conseils`} className="link"> <h5>Bébé a mal aux dents : que penser du collier d’ambre ? </h5> </Link> 
          <Link to={`/Conseils`} className="link"> <h5> La Fièvre</h5> </Link> 
          <Link to={`/Conseils`} className="link"> <h5>Comment bien dormir pendant la grossesse </h5> </Link> 
          </Card.Text>

          <Card.Title>Assistance</Card.Title>
          <Card.Text>
            <p>
              {" "}
              Vous avez besoin d'aide ? Appelez-nous au (+216) 93 507 078 | Toute
              la semaine de 9h à 20h. babylando@gmail.com
            </p>
          </Card.Text>
          <Button variant="primary">Allez vers le haut</Button>
        </Card.Body>
        <Box mt={8}>
        <Copyright />
      </Box>
      </Card>
      </footer>
    </div>
   
  );
};

export default Home;
