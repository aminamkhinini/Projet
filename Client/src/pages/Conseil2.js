import React from "react";

import {Link} from 'react-router-dom';
const Conseil2 = () => {
  return (
    <div>
      <img src="logo/logoimg.png" alt="logo" className="logo" />

      <h2> Alimentation pendant la grossesse </h2>
      <div className="container">
        <img variant="top" src="images/femme.jpg" className="img2" />
        <div className="conseil2">
          <p>
            On le sait toutes et cela m’a obsédé pour ma première grossesse, il
            faut que la femme enceinte mange équilibré pour qu’elle puisse
            transmettre au bébé tous les nutriments dont il a besoin pour bien
            se développer. Voilà ce que j’ai pu retenir depuis ma 1e grossesse :
          </p>

          <h6>1- Manger 3 fois par jour;</h6>
          <h6>
            {" "}
            2-Avoir toujours dans votre sac une collation (je ne parle pas de
            croustilles mais bien des barres de céréales, des fruits ou des
            noix) ; 
            </h6>
            <h6> 
            3-Manger une variété d’aliments provenant des 4 groupes du
            Guide alimentaire canadien, c’est-à-dire: légumes et fruits,
            produits céréaliers, lait et substituts et viande et substituts. Une
            femme enceinte devrait ajouter 2 à 3 portions de plus par jour de
            l’une ou l’autre des catégories, selon le Guide;
            </h6>
         
          <h6>
            {" "}
            4-Ne pas attendre d’avoir une grosse faim pour manger car une femme
            enceinte peut rapidement avoir une baisse d’énergie.
          </h6>
        </div>
      </div>
      <div className="para">
        <p>
          {" "}
          De plus, à mon grand désarroi, certains aliments sont à éviter voire à
          bannir de l’alimentation pendant une grossesse, voici la liste:
          <br/>
          1- Des fromages non pasteurisés 
           <br/>
           2-Du foie 
           <br/>
          3- Du chou cru 
           <br/>
           4-Les oeufs crus 
           <br/>
           5-La papaye
          <br/>
          6-La viande crue ou pas assez cuite 
          <br/>
          7-Le poisson cru (les fameux sushis!!)
          En contre partie, j’ai découvert un aliment qui a des vertus pour la
          femme enceinte: l’artichaut. En conclusion, bien manger durant la
          grossesse, ce n’est pas compliqué. La femme enceinte n’a pas besoin de
          bouleverser son alimentation mais plutôt de l’ajuster pendant les 9
          mois de grossesse ainsi que pendant l’allaitement si vous allaitez.
        </p>
      </div>

      <Link  to='/Conseils'>
            <h6>Revenir en Arrière </h6>
            </Link>
       
    </div>
  );
};

export default Conseil2;
