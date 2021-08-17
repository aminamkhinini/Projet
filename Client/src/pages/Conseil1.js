

import React  from 'react';
import Button from '@material-ui/core/Button';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'; 
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

  
  
  
const Conseil1 = () => {
  
 
  return (
    <div>
      <img
        src="logo/logoimg.png"
        alt="logo"
      
        className="logo"
      />
     
     
   
      <h2> Bébé a mal aux dents : que penser du collier d’ambre ?</h2>
      <div className="container"> 
      <img src="images/collier1.jpg" alt="collier"  className="img1"/>
      <div className="conseil1">
      <p >
        L’ambre est une résine de conifère fossilisée, dont la couleur varie en
        fonction de la nature des sols. Depuis des millénaires, on prête à
        l’ambre de nombreux bienfaits au contact de la peau, si bien qu’elle est
        commercialisée en bracelets, colliers, pour adultes et pour enfants.
        </p>
       <h3> Bébé a mal aux dents : quels sont les bienfaits du collier d’ambre ?</h3>
       <p> Le
        principe : le fossile émet des ions négatifs qui, au contact de la peau,
        régulent la circulation des énergies dans l’organisme, jouent sur les
        humeurs et la qualité de la circulation sanguine. On attribue aussi à
        l’ambre le pouvoir de résoudre les difficultés d’endormissement, de
        calmer les angoisses, de soigner les problèmes articulaires, les
        rhumatismes, mais aussi les affections cutanées (eczéma, psoriasis…).
        Chez les enfants, il est surtout réputé pour ses vertus apaisantes
        contre les maux de dents.
         </p> 
         </div>
         </div>
         <div className="para"> 
         <h3> Bébé a mal aux dents :qu’est-ce qu’on reproche
        au collier d’ambre ?</h3> 
        <p> Outre le fait que ses vertus ne soient pas
        scientifiquement prouvées, le collier d’ambre est régulièrement montré
        du doigt par ceux qui estiment qu’il comporterait un risque de
        strangulation, au cas où l’enfant l’accrocherait par mégarde à un objet,
        à une branche ou à un montant de lit. En un mot : le collier d’ambre
        crée la polémique car il mettrait en péril la sécurité de bébé.</p> 
        <h3> Bébé amal aux dents : que faut-il penser du collier d’ambre ?</h3>  
        <p> Les accidents de
        la sorte restent fort heureusement très rares, et sont principalement
        survenus il y a une vingtaine d’années. Aujourd’hui les fabricants
        redoublent de vigilance pour que les produits à destination des bébés
        soient sans danger. Bébé a mal aux dents : comment choisir son collier
        d’ambre ? Préférez un modèle spécifique pour les bébés. Ras du cou, il
        diminue les risques de s’ « accrocher » à un objet. Le fil doit être
        assez fin pour pouvoir se rompre en cas d’accroc ; en revanche, les
        perles doivent être séparées par des nœuds de sécurité, évitant qu’elles
        ne se dispersent (et puissent être avalées par l’enfant) si le collier
        se casse. Préférez également des perles de formes rondes, moins
        irritantes pour la peau de bébé et privilégiez les fermoirs en ambre,
        avec un système à vis</p> 
        <h3> Bébé a mal aux dents : comment l’utiliser ?</h3> 
        <p>  Le
        collier doit être en contact avec la peau : n’hésitez donc pas à le
        rentrer dans le body, vous éviterez en plus ainsi qu’il s’accroche. Par
        précaution, retirez le collier pendant les siestes et les nuits : vous
        pouvez alors en profiter pour le laisser se recharger en ions négatifs,
        en le laissant sur une table. Autre option : le nouer à la cheville de
        bébé, bien au chaud dans sa turbulette !</p>
        </div>
       
        <Link  to='/Conseils'>
            <h6>Revenir en Arrière </h6>
            </Link>
       
    </div>
  );
};

export default Conseil1
