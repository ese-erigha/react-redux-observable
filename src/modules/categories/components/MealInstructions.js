import React,{Fragment} from 'react';

const MealInstructions = (props)=>{

    return <Fragment>
            <div className="banner">Instructions</div>
            <div className="instruction-text" dangerouslySetInnerHTML={{__html:props.instructions}}></div>
           </Fragment>;
};

export default MealInstructions;