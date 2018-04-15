import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import * as usersActions from '../usersActions';

import {Row,Col} from 'react-materialize';

import UserItem from '../components/UserItem';
import ContentHeader from '../../../shared/components/ContentHeader';
import Spinner from '../../../shared/components/Spinner';


class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
    }

    fetchPostsByUser = (userId)=>{
        console.log(userId);
        console.log(this.props);
        this.props.history.push(`/posts/${userId}`)
        //this.props.history.push(`${this.props.match.path}/${userId}`);
    };

    componentDidMount(){
        this.props.fetchUsers();
    }

    //Sync your state with props 
    componentWillReceiveProps(nextProps){

        if(nextProps.error.status){
            this.setState({error: true});
        }
    }

    splitArray = (oldArray,chunkSize=4)=>{
        if(!oldArray) return [];
        let arr = oldArray.reduce((newArray,item,index)=>{

            const newArrayIndex = Math.floor(index/chunkSize);

            if(!newArray[newArrayIndex]){
                newArray[newArrayIndex] = []; 
            }

            newArray[newArrayIndex].push(item);

            return newArray;
        },[]);

        return arr;
    }

    render(){
        // console.log(this.props);
        const listItems = this.splitArray(this.props.users).map((subArray,index) =>{

            return (

                <Fragment key={index}>
                    <Row className="list-row">
                        {
                            subArray.map((user,index)=>{

                                return <Col key={index} s={3} l={3} m={3}>
                                            <UserItem onFetchPosts={this.fetchPostsByUser} user={user}/>
                                       </Col>;
                            })
                        }
                    </Row>
                </Fragment>
            );

        });

        return (
            <Fragment>
                <ContentHeader title='Users'/>

                <div className="wrapper">
                {
                    this.props.loading && <Row>
                    <Col m={12} l={12} s={12}>
                        <Spinner/>
                    </Col>
                </Row>
                }
                <Row className="top-categories">
                    <Col m={12} l={12} s={12}>
                        {this.props.users.length > 0 && !this.props.loading && listItems}
                    </Col>
                </Row>
                <SweetAlert
                    show={!this.props.loading && this.state.error}
                    title="Error"
                    text={this.props.error.message}
                    animation="slide-from-top"
                    onConfirm={() => this.setState({ error: false })}
                    closeOnClickOutside= "false"
                    icon="error"
                  />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state.usersState);
    return { 
        users: state.usersState.users,
        loading: state.usersState.loading,
        error: state.usersState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(usersActions.fetchUsersAction())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);

