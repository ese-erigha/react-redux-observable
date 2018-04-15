import React,{Fragment} from 'react';
import {Row,Col,Card} from 'react-materialize';

// {
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// }

const ListItem = (props)=>{

    const fetchCategory = (categoryName,evt)=>{
        evt.preventDefault();
        //console.log(categoryName);
        props.onFetchItem(categoryName);
    };

    return <Fragment>
            <Card className="hand list-item" onClick={fetchCategory.bind(this,props.item.strCategory)}>
               <Row>
                    <Col l={2} s={12} m={2}>
                        <div className="avatar">
                            <img alt="Content picx" src={props.item.strCategoryThumb}/>
                        </div>   
                    </Col>
                    <Col l={10} s={12} m={10}>
                        <div className="title">
                            {props.item.strCategory}
                        </div>        
                        {props.item.strCategoryDescription && <div className="description">{props.item.strCategoryDescription}</div>}
                    </Col>
               </Row>
            </Card>
           </Fragment>;
};

export default ListItem;