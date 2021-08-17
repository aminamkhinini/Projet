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
const Conseil3 = () => {
  return (
    <div>
      <img src="logo/logoimg.png" alt="logo" className="logo" />

 
        <h1> Comment bien dormir pendant la grossesse</h1>
        <div className="container">
        <img  variant="top" src="images/enceinte.jpg" className="img3" />
        <div className="conseil3">
          <p>
            Au fil des 9 mois de votre grossesse, votre ventre va s’arrondir et
            vos nuits vont devenir de plus en plus agitées. Pour ne pas passer
            une grossesse fatigante et optimiser vos chances de récupérer la
            nuit, voici quelques conseils pour bien dormir enceinte:
            <h6> Trouver la bonne position</h6>
            <p>
              {" "}
              Sachez qu’aucune position n’est déconseillée à aucun moment de la
              grossesse. Gardez vos habitudes jusqu’à ce que votre ventre ne
              vous le permette plus.
            </p>
          </p>
          <p>
            A partir du 6ème mois, il est conseillé de dormir sur le côté
            gauche. En effet, cette position libère la veine-cave, qui conduit
            le sang vers le cœur. Cette position améliore la circulation
            sanguine et accroit la fonction rénale. Il est important d’adapter
            sa position à sa physiologie de femme enceinte au cours de la
            grossesse. Vous pouvez aussi vous aidez avec des coussins pour
            trouver une position plus confortables, beaucoup de femmes enceintes
            glissent leur traversin ou leur coussin d’allaitement entre leurs
            jambes et sous leur ventre.
          </p>
        </div>
        </div>
        <div className="para">
          <h6> Dînez léger</h6>
          <p>
            {" "}
            Pour faciliter la digestion, privilégiez les repas légers mais ne
            vous affamez surtout pas ! Vous avez besoin de forces, même le soir.
            Il est aussi conseillé d’attendre au moins 1h30 avant d’aller dormir
            et de ne pas boire dans les 30 minutes qui précèdent le coucher,
            afin d’éviter de se réveiller pour aller aux toilettes.
          </p>

          <h6>Détendez-vous </h6>
          <p>
            {" "}
            Comme tous les autres moments de votre grossesse, la soirée doit
            être un moment calme et paisible. Fuyez les films d’horreur ou les
            disputes à la maison, prenez le temps de vous relaxer en vous
            faisant couler un bain par exemple. Au quotidien, vous pouvez opter
            pour des séances de yoga pour femme enceinte ou essayer la
            sophrologie adaptée à la maternité. Ces deux pratiques peuvent vous
            aider à apprendre à vous détendre et à trouver une vraie sérénité.
          </p>
          <h6> Ecoutez votre corps</h6>

          <p>
            {" "}
            Ne vous forcez pas à aller vous coucher si vous n’en ressentez pas
            le besoin et ne luttez pas contre les signes de fatigue. Ne ratez
            pas le coche, au risque de devoir attendre jusqu’à 2h pour sentir à
            nouveau la sensation de fatigue.
          </p>

          <h6> Adoptez un rituel de coucher</h6>
          <p>
            {" "}
            Pour réguler votre horloge biologique et avoir un sommeil réparateur
            il est important que vous respectiez des horaires de lever et de
            coucher stables. Et chaque soir, répétez le même rituel pour que
            votre corps et votre esprit comprennent qu’il est temps d’aller se
            coucher ! Préférez une chambre plutôt fraîche et bien sombre, ces
            paramètres favorisent l’endormissement lors de la grossesse. Si tous
            ces conseils ne suffisent pas à vous faire passer des nuits
            paisibles enceinte (et c’est possible…) n’hésitez pas à faire des
            petites siestes de 15 à 20 minutes, notamment après les repas, pour
            ne pas accumuler la fatigue.
          </p>
        </div>
       
        <Link  to='/Conseils'>
            <h6>Revenir en Arrière </h6>
            </Link>
       
        
      </div>
  
  );
};

export default Conseil3;
