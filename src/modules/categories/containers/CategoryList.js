import React,{Component,Fragment} from 'react';
import {Row,Col} from 'react-materialize';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import CategoryItem from '../components/CategoryItem';

import * as categoriesActions from '../categoriesActions';

import ContentHeader from '../../../shared/components/ContentHeader';
import Spinner from '../../../shared/components/Spinner';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
    }

    componentDidMount(){
        // console.log("category name:",this.props.match.params.categoryName);
        // console.log(this.props);
        this.props.fetchCategoryList(this.props.match.params.categoryName);
    }

    //Sync your state with props 
    componentWillReceiveProps(nextProps){

        if(nextProps.error.status){
            this.setState({error: true});
        }
    }

    fetchCategory = (mealId)=>{
        //console.log(mealId);
        //console.log(this.props);
        this.props.history.push(`${this.props.match.url}/${mealId}`);
    }

    splitArray = (oldArray,chunkSize)=>{
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

        const listItems = this.splitArray(this.props.meals,4).map((subArray,index) =>{

            return (

                <Fragment key={index}>
                    <Row className="list-row">
                        {
                            subArray.map((item,index)=>{

                                return <Col key={index} s={3} l={3} m={3}>
                                            <CategoryItem onFetchItem={this.fetchCategory} item={item}/>
                                       </Col>;
                            })
                        }
                    </Row>
                </Fragment>
            );

        });

        return (
            <Fragment>
                <ContentHeader title={this.props.match.params.categoryName}/>

                <div className="wrapper">
                {
                    this.props.loading && <Row>
                    <Col m={12} l={12} s={12}>
                        <Spinner/>
                    </Col>
                    </Row>
                }
                <Row className="category-list">
                    <Col m={12} l={12} s={12}>
                        {this.props.meals && this.props.meals.length > 0 && !this.props.loading && listItems}
                        {!this.props.meals && !this.props.loading && <div> No food listed for this category</div>}
                        {this.props.meals && this.props.meals.length === 0 && !this.props.loading && <div> No food listed for this category </div>}
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
        meals: state.categoryListState.meals,
        loading: state.categoryListState.loading,
        error: state.categoryListState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchCategoryList: (categoryName) => dispatch(categoriesActions.fetchCategoryListAction(categoryName))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);

