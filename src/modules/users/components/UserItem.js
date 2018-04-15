import React,{Fragment} from 'react';
import {Row,Col,Card} from 'react-materialize';

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// },

const UserItem = (props)=>{

    const fetchPosts = (userId,evt)=>{
        evt.preventDefault();
        //console.log(categoryName);
        props.onFetchPosts(userId);
    };

    return <Fragment>
            <Card className="hand list-item" onClick={fetchPosts.bind(this,props.user.id)}>
               <Row>
                    <Col l={12} s={12} m={12}>
                        <div className="title">{props.user.name}</div>
                        <div className="email">{props.user.email}</div>
                        <div className="address">
                            {props.user.address.suite}, {props.user.address.street}, {props.user.address.city}
                        </div>  
                    </Col>
               </Row>
            </Card>
           </Fragment>;
};

export default UserItem;