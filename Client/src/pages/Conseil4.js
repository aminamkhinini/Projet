import React from "react";
import Button from "@material-ui/core/Button";
import { Card } from "react-bootstrap";
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
const Conseil4 = () => {
  return (
    <div>
      <img src="logo/logoimg.png" alt="logo" className="logo" />

        <h1> La Fièvre </h1>
        <div className="container">
        <img variant="top" src="images/fievre.jpg" className="img4" />
        <div className="conseil4">
          <p>
            Le thermomètre monte, ne cédez pas à la panique ! La fièvre est une
            réaction naturelle de l’organisme pour lutter contre les infections.
            Encore faut-il savoir comment réagir… Huit questions réponses pour
            balayer les idées reçues:
            <h6> La fièvre est un symptôme dangereux.</h6> 
            <p>
            Faux
            <br/>
            C’est un phénomène sans gravité et même utile qui permet à
            l’organisme de défendre ! Il est rare que la fièvre soit le seul
            signe d’une maladie grave ou même qu’elle entraîne des
            complications. Néanmoins si elle persiste plusieurs jours ou gène
            vraiment l’enfant, il est important d’en informer votre médecin.
            Attention chez les très jeunes enfants (moins de 6 mois) il faut
            consulter immédiatement. </p> 
          </p>
        </div>
      </div>
      <br/>
      <div className="para">
        <p>
         <h6> Baigner son enfant dans l’eau tiède (2° C en dessous de celle de
          l’enfant) fait baisser significativement la température. </h6> 
           Faux
           <br/>
            Donner un bain tiède à un enfant fiévreux risque d’augmenter son malaise
          plutôt que de baisser réellement sa température. De même les poches de
          glace ne sont plus vraiment conseillées. Attention cependant, si votre
          enfant apprécie particulièrement le bain, il ne faut pas se priver de
          lui en donner.
          </p>
          <p>
            <h6> Il faut alterner les médicaments pour faire baisser une
          forte fièvre </h6> 
           Faux 
           <br/>
           Il est important de ne donner qu’un seul type de
          médicament, en respectant les doses et les intervalles entre les
          prises. Si cela ne suffit pas à faire baisser sa température,
          consultez votre médecin.
          </p>
          <p> 
            <h6> Il faut maintenir une température de 18-20°C
          dans la chambre de l’enfant</h6> 
           Vrai
           <br/>
            La température est très importante
          pour le confort de l’enfant qui a de la fièvre. Une température de
          18-20° C est idéal en cas de fièvre, ni trop chaud ni trop froid.
          Attention aussi a ne pas trop couvrir votre enfant !
          </p>
          <p>
            <h6> Il faut donner un
          médicament dès 38° C .</h6> 
           Faux 
           <br/> 
           Généralement, il n’est pas nécessaire
          d’envisager la prise de médicaments en dessous de 38,5°C. Si elle est
          bien supportée par l’enfant, la fièvre ne nécessite pas de traitement
          systématique.
          </p>
          <p>
            <h6>Pour prendre la température de manière précise, mieux
          vaut utiliser la voie rectale. </h6> 
           Vrai 
          <br/>
           Mais cela n’est pas toujours
          facile chez l’enfant. Aussi, on peut mesurer la température sous la
          langue ou l’aisselle ou encore dans le conduit de l’oreille, avec des
          thermomètres spécifiques.
          </p>
          <p>
            <h6>
            On peut utiliser n’importe quel médicament
            </h6>
           
          Faux
          <br/>
           Seuls le paracétamol, l’ibuprofène, le kétoprofène et l’ aspirine
          peuvent être utilisés. La capacité à faire baisser la fièvre de ces
          quatre antipyrétique est pratiquement identique. Chez l’enfant de
          moins de 3 mois seuls le paracétamol et l’aspirine peuvent être
          utilisés. Quoi qu’il en soit, lisez toujours attentivement les notices
          de vos médicaments.
          </p>
          <p>
            <h6>
            Les effets secondaires graves des antipyrétiques
          sont rarissimes </h6> 
          Vrai
          <br/>
           Les effets secondaires graves reportés pour
          l’ibuprofène, le paracétamol et l’aspirine sont très rares, seuls
          quelques dizaines de cas ont été reportés en 2003 pour plus de 20
          millions de traitements prescrits. La sécurité de ces produits est
          donc très importante. 
          <br/>
          Anne-Aurélie Epis de Fleurian
        </p>
       
        
      </div>
      <Link  to='/Conseils'>
            <h6>Revenir en Arrière </h6>
            </Link>
       
    </div>
  );
};

export default Conseil4;
