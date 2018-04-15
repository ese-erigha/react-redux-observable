import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

//React-Materialize
import {Navbar} from 'react-materialize';

//Other Component or Containers

//Authentication service
import auth from './shared/services/auth';

//CSS Files
import './App.css';

//Static variables
const loaderTimeout = 10 * 1000;  //indicates when the loader has timed out either due to network or something else

//Loader for Lazy-loading components
const Loading = (props)=>{
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


//Login Component
const Login = Loadable({
  loader: () => import('./modules/authentication/Login'),
  loading:  Loading,
  timeout: loaderTimeout,
});

//Users component
const Users = Loadable({
  loader: () => import('./modules/users/containers/Users'),
  loading:  Loading,
  timeout: loaderTimeout,
});

//Posts component
const Posts = Loadable({
  loader: () => import('./modules/posts/containers/Posts'),
  loading:  Loading,
  timeout: loaderTimeout,
});


//Higher Order Component for loading protected routes
const ProtectedRoute = ({component: Component, ...rest})=> {

  return <Route 
   
     {...rest}
     render={props => auth.isAuthenticated() ? (<Component {...props} /> ) : (<Redirect to={{pathname: "/login",state:{from: props.location}}} />)}
   />
};

const store = configureStore();

// const logo = <img alt="Redux-Observable" height="55px" width="70px"  src="https://brownink.com.au/wp-content/uploads/bfi_thumb/cafe-meals-logo-case-study-m7sp69st87oirfz6g62n413yejh2zz0fo5cputsja8.jpg"/>
//refer to this url: https://stackoverflow.com/questions/47644768/how-to-add-image-in-navbar-in-react-materialize

class App extends Component {

  constructor(props){
    super(props);
    this.state = {isFixedNavbar: true};
  }


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
          <Navbar brand="Redux-Observable" fixed={this.state.isFixedNavbar} right>
          </Navbar>
          <Switch>
              <ProtectedRoute exact path="/users" component={Users}></ProtectedRoute>
              <ProtectedRoute exact path="/posts/:userId" component={Posts}></ProtectedRoute>
              <Route exact path="/login" component={Login}></Route>
              <Redirect from='/' to='/users'></Redirect>
          </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
export default App;
