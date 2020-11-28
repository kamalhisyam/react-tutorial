import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/shop';
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={ShopPage}/>
        <Route path ='/' component={HomePage}/>
        
      </Switch>
       
    </div>
  );
}

export default App;
