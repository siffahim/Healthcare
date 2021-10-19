import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const { name, img, information, id } = props.service;
    const history = useHistory();
    const handleDetail = id => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className='card'>
                <div className='img-div'>
                    <Card.Img variant="top" className='img' src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {information.substr(0,194)}
                    </Card.Text>
                    <button onClick={()=> handleDetail(id)} className='btn-regular'>View Detail <i className="fas fa-caret-right"></i></button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;