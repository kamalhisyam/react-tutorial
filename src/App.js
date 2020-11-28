import './App.css';
import HomePage from './pages/HomePage';
import HatsDemo from './pages/HatsDemoPage';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/shop/hats' component={HatsDemo}/>
        <Route path ='/' component={HomePage}/>
        
      </Switch>
       
    </div>
  );
}

export default App;
