import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

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
const Footer = () => {
  return (
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
         
        </Card.Body>
        <Box mt={8}>
        <Copyright />
      </Box>
      </Card>
    </footer>
  )
}
export default Footer
