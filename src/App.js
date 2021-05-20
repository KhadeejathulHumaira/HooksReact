import './App.css';
import Home1 from './Components1/Home1'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from './Components1/Login';
import Signup from './Components1/Signup';
import Forget from './Components1/Forget';
import Account from './Components1/Account';





function App(props) {
  return (
    <Router>
      
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path="/forget">
          <Forget/>
        </Route>
        <Route path="/account/:params">
          <Account/>
        </Route>
        <Route path='/'>
            <Home1/>
        </Route>
    
       

      </Switch>
       
        
    
      
    </div>
    </Router>
  );
}

export default App;
