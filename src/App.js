import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/shop';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({currentUser: user});
      createUserProfileDocument(user);
    });    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header {...this.state}/>
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUpPage}/>
        </Switch>
        
      </div>
  );
}
}

export default App;
