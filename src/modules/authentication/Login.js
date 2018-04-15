import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import auth from '../../shared/services/auth';

class Login extends Component{

    state={
      redirectToReferrer: false,
      username: 'demo@demo.com',
      password: 'fzanimotto'
    };
  
    login = ()=>{
  
        auth.login(this.state,()=>{

          this.setState({ redirectToReferrer: true });
        });
    };
  
    render(){
  
      const { from } = this.props.location.state || {from: {pathname: '/'}};

      if(auth.isAuthenticated()){
        return (
          <Redirect to="/" />
        );
      }
  
      if(this.state.redirectToReferrer === true){
          return (
            <Redirect to={from} />
          );
      }

  
      return (
        <div> 
            <p>Please Login to view {from.pathname}</p>
            <button onClick={this.login}>Log In</button>
        </div> 
        
      );
    }
  
  }

  export default Login;