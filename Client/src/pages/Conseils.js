

import React  from 'react';

import {Card, CardGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom';




  
const Conseils = () => {
  
 
  return (
    <div>
      <img
        src="logo/logoimg.png"
        alt="logo"
        className="logo"
      />
      <h1> Nos Conseils</h1>
    
      
      <CardGroup className="card-group">
  <Card className="card">
    <Card.Img  variant="top" src="images/collier1.jpg" className="img"/>
    <Card.Body>
    <Link to={`/Conseil1`} className="link"> <Card.Title>
              Bébé a mal aux dents : que penser du collier d’ambre ?
            </Card.Title></Link>
      <Card.Text>
      <p> L’ambre est une résine de conifère fossilisée, dont la couleur varie en
        fonction de la nature des sols. Depuis des millénaires, on prête à
        l’ambre de nombreux bienfaits au contact de la peau, si bien qu’elle est
        commercialisée en bracelets, colliers, pour adultes et pour enfants.</p>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="card">
    <Card.Img variant="top" src="images/enceinte.jpg"className="img" />
    <Card.Body>
    <Link to={`/Conseil3`} className="link"><Card.Title>Comment bien dormir pendant la grossesse</Card.Title> </Link> 
      <Card.Text>
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
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="card">
    <Card.Img  variant="top" src="images/femme.jpg"className="img" />
    <Card.Body>
    <Link to={`/Conseil2`} className="link"><Card.Title>L’alimentation pendant la grossesse </Card.Title></Link> 
      <Card.Text>
      <p >
      On le sait toutes et cela m’a obsédé pour ma première grossesse, il faut que la femme enceinte mange équilibré pour qu’elle puisse transmettre au bébé tous les nutriments dont il a besoin pour bien se développer.

Voilà ce que j’ai pu retenir depuis ma 1e grossesse :
        </p>
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card className="card">
    <Card.Img variant="top" src="images/fievre.jpg"  className="img"/>
    <Card.Body>
    <Link to={`/Conseil4`} className="link"><Card.Title>La Fièvre</Card.Title></Link>  
      <Card.Text>
      <p>
            Le thermomètre monte, ne cédez pas à la panique ! La fièvre est une
            réaction naturelle de l’organisme pour lutter contre les infections.
            Encore faut-il savoir comment réagir… Huit questions réponses pour
            balayer les idées reçues. La fièvre est un symptôme dangereux. Faux
            C’est un phénomène sans gravité et même utile qui permet à
            l’organisme de défendre ! Il est rare que la fièvre soit le seul
            signe d’une maladie grave ou même qu’elle entraîne des
            complications. Néanmoins si elle persiste plusieurs jours ou gène
            vraiment l’enfant, il est important d’en informer votre médecin.
            Attention chez les très jeunes enfants (moins de 6 mois) il faut
            consulter immédiatement.
          </p>{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        
     
    </div>
  );
};

export default Conseils
