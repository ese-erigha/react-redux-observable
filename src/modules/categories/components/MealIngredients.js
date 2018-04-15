import React,{Component,Fragment} from 'react';
import {Table} from 'react-materialize';

class MealIngredients extends Component{

    constructor(props){
        super(props);
        this.state = {
                ingredientKey:'strIngredient',
                measureKey: 'strMeasure'
            }
    }

    getIngredientNumberRange = (item)=>{

        return Object.keys(item)
                     .filter(key => key.includes(this.state.ingredientKey) && this.props.item[key] != null && this.props.item[key].length > 0)
                     .map(ingredientKey=>
                        //ingredientKey is equivalent to strIngredientX where x is an integer number
                        ingredientKey.split(this.state.ingredientKey)[1]
                        //returns an integer number such as 1 , 2,3 ..... n
                    )
                    .sort((x,y) => x-y);
    }

    render(){
        
        const ListItems = this.getIngredientNumberRange(this.props.item).map((x)=>{
                // x is an integer number
                
            return (

                <Fragment key={x}>
                    <tr>
                        <td>{this.props.item[`${this.state.ingredientKey}${x}`]}</td>
                        <td>{this.props.item[`${this.state.measureKey}${x}`]}</td>
                    </tr>
                </Fragment>
            );
        });

        return (
            <Fragment>
                <Table striped={true} hoverable={true} responsive={true} bordered={true}>
                    <thead>
                        <tr>
                            <th data-field="ingredient">Ingredients</th>
                            <th data-field="measure">Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListItems}
                    </tbody>
                </Table>
           </Fragment>
        );
    };
};

export default MealIngredients;