
import './App.css';
import { Container } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';
 import'bootstrap-css-only/css/bootstrap.min.css'; 
 //import'mdbreact/dist/css/mdb.css';
 //routing
import  {BrowserRouter as Router,Route}from  'react-router-dom'
// components
import ProductScreen from './components/ProductScreen'
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/Home';
import contact from './pages/contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import  Admin from './pages/Admin';
import PrivateRouteAdmin from './components/PrivateRouteAdmin'
import Conseils from './pages/Conseils';
import Conseil1 from './pages/Conseil1';
import Conseil2 from './pages/Conseil2';
import Conseil3 from './pages/Conseil3';
import Conseil4 from './pages/Conseil4';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Profile from'./pages/Profile';
import PlaceOrder from'./pages/PlaceOrder';
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'

// History
import history from './utils/history'


function App() {
  
 
  return (
    <div className="App">
       <Router history={history}>
            <Header />
            <main className='py-3'>
                <Container>
                <Route exact path='/Register' component ={Register}/>
     <Route exact path='/Login' component ={Login}/>
     <Route exact path='/contact' component ={contact}/>
     <Route exact path='/Products' component ={Products}/>
     <Route exact path="/ProductScreen/:id" component={ProductScreen}/>
     

     
     <Route exact path='/Conseils' component ={Conseils}/>
     <Route exact path='/Conseil1' component ={Conseil1}/>
     <Route exact path='/Conseil2' component ={Conseil2}/>
     <Route exact path='/Conseil3' component ={Conseil3}/>
     <Route exact path='/Conseil4' component ={Conseil4}/>
     <Route exact path='/' component ={Home}/>
     <PrivateRouteAdmin exact path='/Admin' component ={ Admin}/>

                    <Route exact path='/cart/:id?' component={Cart} />
                     <Route path='/order/:id' component={Order} />
                    <Route path='/place-order' component={PlaceOrder} />
                    <Route path='/payment' component={Payment} />
                    <Route path='/shipping' component={Shipping} />
                  
                    <Route path='/profile' component={Profile} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
      
    </div>
  );
}
export default App;



