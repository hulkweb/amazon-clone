
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from './AddProduct';
import './App.css';
import Body from './Body';
import Checkout from './Checkout';
import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
     
      <Route path="/checkout">
      <Header/>
        <Checkout/>
        </Route>
        
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/product">
        <AddProduct/>
        </Route>
        <Route path="/">
      <Header/>
            <Body/>
        </Route>
        
        
        

      </Switch>
      </BrowserRouter>
        
        
       
        {/* <Body/> */}
    </div>
  );
}

export default App;
