import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card} from 'react-bootstrap'

// react-router-dom
import { useHistory } from 'react-router-dom';
//redux
import{ registerUser} from '../actions/authAction'
import { useDispatch } from 'react-redux';



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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register () {
  const classes = useStyles();
// functions

const [input, setInput] = useState({
  firstname:'',
  lastname:'',
  email:'',
  password:''
})
const dispatch = useDispatch()
const history= useHistory()
const handelChange = (e) => {
  setInput({...input,[e.target.name]:e.target.value})
}
const handelSubmit = (e) => {
  e.preventDefault();
  dispatch(registerUser(input, history));
};
  return (
    <div> 
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5"style={{fontFamily:"Roboto, sans-serif"}}>
      Register
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="firstname"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="lastname"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handelChange}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handelSubmit}
          >
          sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
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
}