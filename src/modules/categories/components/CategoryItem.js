import React,{Fragment} from 'react';
import {CardPanel} from 'react-materialize';

// {
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// }

const CategoryItem = (props)=>{

    const fetchCategory = (mealId,evt)=>{
        evt.preventDefault();
        //console.log(categoryName);
        props.onFetchItem(mealId);
    };

    return <Fragment>
    <CardPanel className="hand category-item" onClick={fetchCategory.bind(this,props.item.idMeal)}>
        <div className="avatar">
            <img alt="Content picx" src={props.item.strMealThumb}/>
        </div> 
        <div className="title">
            {props.item.strMeal}
        </div>         
    </CardPanel>
    </Fragment>;
};

export default CategoryItem;