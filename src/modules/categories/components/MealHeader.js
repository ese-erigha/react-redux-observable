import React,{Fragment} from 'react';
import {Row,Col,CardPanel} from 'react-materialize';

const MealHeader = (props)=>{

    return <Fragment>
                <Row className="meal-header">
                    <Col m={12} l={12} s={12}>
                        <CardPanel>
                            <div className="avatar">
                                <img alt="Content picx" src={props.item.strMealThumb}/>
                            </div>
                            <div className="content-header">
                                <span className="title">
                                    {props.item.strMeal}
                                </span>
                                <span className="category">
                                    - {props.item.strCategory}
                                </span>
                            </div>
                        </CardPanel>
                    </Col>
                </Row>
                
           </Fragment>;
};

export default MealHeader;