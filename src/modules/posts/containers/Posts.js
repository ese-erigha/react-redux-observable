import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import * as postsActions from '../postsActions';

import {Row,Col} from 'react-materialize';

import PostItem from '../components/PostItem';
import ContentHeader from '../../../shared/components/ContentHeader';
import Spinner from '../../../shared/components/Spinner';


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
    }

    componentDidMount(){
        this.props.fetchPosts(this.props.match.params.userId);
    }

    //Sync your state with props 
    componentWillReceiveProps(nextProps){

        if(nextProps.error.status){
            this.setState({error: true});
        }
    }

    render(){
        
        const listItems = this.props.posts.map((post,index) =>{

            return (

                <Fragment key={post.id}>
                   <PostItem post={post}/>
                </Fragment>
            );

        });

        return (
            <Fragment>
                <ContentHeader title='Posts'/>

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
                        {this.props.posts.length > 0 && !this.props.loading && listItems}
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
    console.log(state.postsState);
    return { 
        posts: state.postsState.posts,
        loading: state.postsState.loading,
        error: state.postsState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (userId) => dispatch(postsActions.fetchPostsAction(userId))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Posts);

