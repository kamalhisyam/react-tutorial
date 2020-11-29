import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/shop';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/header';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
       
    </div>
  );
}

export default App;
