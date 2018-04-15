import React,{Component} from 'react';
import auth from '../shared/services/auth';

class Logout extends Component{

    logout=()=>{

        this.props.history.push("/");
    }

    render(){

        return (
            <span onClick={this.logout}>Logout</span>
        );
    }
}
export default Logout;