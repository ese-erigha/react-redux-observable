import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import * as categoriesActions from '../categoriesActions';

import {Row,Col} from 'react-materialize';

import ListItem from '../components/ListItem';
import ContentHeader from '../../../shared/components/ContentHeader';
import Spinner from '../../../shared/components/Spinner';


class TopCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
    }

    fetchCategory = (categoryName)=>{
        //console.log(categoryName);
        this.props.history.push(`${this.props.match.path}/${categoryName}`);
    };

    componentDidMount(){
        this.props.fetchTopCategories();
    }

    //Sync your state with props 
    componentWillReceiveProps(nextProps){

        if(nextProps.error.status){
            this.setState({error: true});
        }
    }

    render(){
        // console.log(this.props);
        const listItems = this.props.categories.map((item,index) =>{

          return (

                <Fragment key={item.idCategory}>
                   <ListItem onFetchItem={this.fetchCategory} item={item}/>
                </Fragment>
            );

        });

        return (
            <Fragment>
                <ContentHeader title='Categories'/>

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
                        {this.props.categories.length > 0 && !this.props.loading && listItems}
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
    return { 
        categories: state.topCategoriesState.categories,
        loading: state.topCategoriesState.loading,
        error: state.topCategoriesState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchTopCategories: () => dispatch(categoriesActions.fetchTopCategoriesAction())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TopCategories);

