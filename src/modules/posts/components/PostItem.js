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

const PostItem = (props)=>{

    
    return <Fragment>
            <Card className="hand list-item">
               <Row>
                    <Col l={12} s={12} m={12}>
                        <div>{props.post.title}</div>
                        <div>{props.post.body}</div>   
                    </Col>
               </Row>
            </Card>
           </Fragment>;
};

export default PostItem;