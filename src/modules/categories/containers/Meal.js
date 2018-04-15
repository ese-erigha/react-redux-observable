import React,{Component,Fragment} from 'react';
import {Row,Col} from 'react-materialize';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import * as categoriesActions from '../categoriesActions';

import MealHeader from '../components/MealHeader';
import Spinner from '../../../shared/components/Spinner';
import MealIngredients from '../components/MealIngredients';
import MealVideo from '../components/MealVideo';
import MealInstructions from '../components/MealInstructions';

class Meal extends Component {

    constructor(props) {

        super(props);
        this.state = {
          error: false,
        };
    }

    componentDidMount(){

        console.log("meal id:",this.props.match.params.mealId);
        console.log(this.props);
        this.props.fetchMeal(this.props.match.params.mealId);
    }

    //Sync your state with props 
    componentWillReceiveProps(nextProps){

        if(nextProps.error.status){
            this.setState({error: true});
        }
    }

    render(){

    
        return (
            <Fragment>
                {
                    this.props.loading && <Row>
                    <Col m={12} l={12} s={12}>
                        <Spinner/>
                    </Col>
                    </Row>
                }
                {this.props.meal && !this.props.loading && <MealHeader item={this.props.meal}/>}
                 
                <Row>
                    <Col m={6} l={6} s={12}>
                        <Row>
                            <Col m={12} l={12} s={12}>
                                {this.props.meal && !this.props.loading && <MealInstructions instructions={this.props.meal.strInstructions}/>} 
                            </Col>
                        </Row>
                        <Row>
                            <Col m={12} l={12} s={12}>
                                {this.props.meal.strYoutube && !this.props.loading && <MealVideo item={this.props.meal}/>}  
                            </Col>
                        </Row>  
                    </Col>
                    <Col m={6} l={6} s={12}>
                        {this.props.meal && !this.props.loading && <MealIngredients item={this.props.meal}/>} 
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
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.mealState);
    return { 
        meal: state.mealState.meal,
        loading: state.mealState.loading,
        error: state.mealState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchMeal: (mealId) => dispatch(categoriesActions.fetchMealAction(mealId))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Meal);

