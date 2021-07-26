
import './App.css';
import {useState}from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import'bootstrap-css-only/css/bootstrap.min.css'; 
 import'mdbreact/dist/css/mdb.css';
import  {Route,Switch}from  'react-router-dom'
import Home from './pages/Home';
import contact from './pages/contact';
import Login from './pages/Login';

import Register from './pages/Register';
import Items from './pages/Items';
import ItemDetails from './components/ItemDetails'
import Navbar from './pages/Navbar';
import  Admin from './pages/Admin';

import PrivateRouteAdmin from './components/PrivateRouteAdmin'
import Conseils from './pages/Conseils';
import Conseil1 from './pages/Conseil1';
import Conseil2 from './pages/Conseil2';
import Conseil3 from './pages/Conseil3';
import Conseil4 from './pages/Conseil4';
import Cart from './pages/cart';
import Orders from './pages/Orders';

function App() {
  const [item, setitem ] = useState([ 
    {
     title:'chicco biberon',
    price:26,
    images:'http://localhost:5000/uploads/1626001467152-CHICCO BIBERON EN PLASTIQU...',
    },
    {
      title:'4 protection de coins',
     price:13,
     images:'http://localhost:5000/uploads/1626457320207-4-protection-de-coins.jpg',
     },
     {
      title:'chaise haute mini plus',
     price:295,
     images:'http://localhost:5000/uploads/1626457026029-chaise-haute-mini-plus.jpg',
     },
  
  ]
  );
  return (
    <div className="App">
      
      <Navbar/>
      
      <Switch> 
     <Route exact path='/Register' component ={Register}/>
     <Route exact path='/Login' component ={Login}/>
     <Route exact path='/contact' component ={contact}/>
     <Route exact path='/Items' component ={Items}/>
     <Route exact path="/ItemDetails/:id" render={(props)=><ItemDetails {...props}></ItemDetails>}/>
     
     <Route exact path='/Conseils' component ={Conseils}/>
     <Route exact path='/Conseil1' component ={Conseil1}/>
     <Route exact path='/Conseil2' component ={Conseil2}/>
     <Route exact path='/Conseil3' component ={Conseil3}/>
     <Route exact path='/Conseil4' component ={Conseil4}/>
     <Route exact path='/' component ={Home}/>
     <PrivateRouteAdmin exact path='/Admin' component ={ Admin}/>

                    <Route path='/cart'>
                        <Cart/>
                    </Route>
                   
                    <Route path='/orders'>
                        <Orders/>
                    </Route>            
   
     </Switch>
    
    </div>
  );
}
export default App;



