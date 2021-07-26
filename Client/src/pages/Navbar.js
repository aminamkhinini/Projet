import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import {Nav} from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
//redux
import { logout } from '../actions/authAction';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
 
}));

export default function NavBar() {
    const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(state=> state.auth.isAuth);

  const user = useSelector(state => state.auth.user);




  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="sticky" style={{backgroundColor:"pink",color:"black", height:60}}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" className={classes.title}>
        <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/" className="nav">Acceuil</Nav.Link>
      <Nav.Link href="/Conseils"className="nav">Nos Conseils</Nav.Link>
      <Nav.Link href="/Items"className="nav">Articles</Nav.Link>
      <Nav.Link href="/contact"className="nav">Contact</Nav.Link>
    </Nav>
       
         

          </Typography>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
              >
                 {isAuth ? (
              <Button color='inherit' onClick={handleClose} onClick={() => dispatch(logout(history))}>
                <Link to='/Register'>LOGOUT</Link>
              </Button>
            ) : (
              <>
                <Button color='inherit'onClick={handleClose}>
                  <Link to='/Register'>Register</Link>
                </Button> 
                <Button color='inherit' onClick={handleClose} >
                  <Link to='/Login'>LOGIN</Link>
                </Button>
              </>
            )}
            {user ? <span className="name"> {user.firstname} {user.lastname}  </span> : <> </>}
            </Menu>
          
          
            
           
            </div>
            
          )}
       
        
        </Toolbar>
      </AppBar>
      
    </div>
  );
}