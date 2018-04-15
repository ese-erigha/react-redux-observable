import React from 'react';
import {Row,Col} from 'react-materialize';

const ContentHeader = (props)=>{

    return <Row className="content-header-wrapper">
        <Col m={12} l={12} s={12}>
            <div className="content-header"><h5>{props.title}</h5></div>
        </Col>
    </Row>;
};

export default ContentHeader;