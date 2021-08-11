import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// react-router-dom
import { useHistory } from 'react-router-dom';
// redux
import { loginUser } from '../actions/authAction';
import { useDispatch, useSelector } from 'react-redux';



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

export default function Login () {
  const classes = useStyles();
// functions

const [input, setInput] = useState({
  email:'',
  password:''
})
const errors = useSelector((state) => state.authReducer?.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth)
  useEffect(() => {
   if (auth.userInfo.isAuth) {
 
     switch (auth.userInfo.user?.role){
      
       case "admin":
         history.push('/Admin')
         break;
         case "user":
           history.push('/Profile')
           break;
     }
  }

    
  }, [auth.userInfo.isAuth])
const handelChange = (e) => {
  setInput({...input,[e.target.name]:e.target.value})
}
const handelSubmit = (e) => {
  e.preventDefault();
  dispatch(loginUser(input, history));
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
  Sign In
        </Typography>
        <form className={classes.form} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <p> {errors ? errors : ''} </p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handelSubmit}
          >
        Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
   




</div>
  );
}

