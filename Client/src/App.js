
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
 import'bootstrap-css-only/css/bootstrap.min.css'; 
 import'mdbreact/dist/css/mdb.css';
import  {Route,Switch}from  'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails'
import Navbar from './pages/Navbar';
import PrivateRoute from './components/PrivateRoute'
import  Admin from './pages/Admin';
import Contact from './pages/Contact';
import Conseils from './pages/Conseils';
import Cart from './pages/cart';

function App({products}) {
 
  return (
    <div className="App">
      <Navbar/>
      <Switch> 
     <Route exact path='/Register' component ={Register}/>
     <Route exact path='/Login' component ={Login}/>
     <PrivateRoute exact path='/Profile' component ={Profile}/>
     <Route exact path='/Products' component ={Products}/>
    
     <Route exact path="/ProductDetails/:id" render={(props)=><ProductDetails {...props}products={products} ></ProductDetails>}/>
     <Route exact path='/Conseils' component ={Conseils}/>
     <Route exact path='/' component ={Home}/>
     <Route exact path='/Admin' component ={ Admin}/>
     <Route exact path='/Contact' component ={Contact}/>
     <Route exact path='/cart' component ={Cart}/>
     </Switch>
    
    </div>
  );
}
export default App;



