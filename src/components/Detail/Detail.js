import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Detail.css';

const Detail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const id = parseInt(serviceId);
    const matchedItem = services?.find(service => service.id === id );

    console.log(matchedItem)
    
    return (
        <Container>
            <Row xs={1} md={1} className="g-4">
                    <Col>
                        <Card className='mb-5'>
                        <Card.Img variant="top" style={{height:'500px'}} src={matchedItem?.img} />
                            <Card.Body>
                            <Card.Title><h3>{matchedItem?.name}</h3></Card.Title>
                                <Card.Text>
                                {matchedItem?.information}
                            </Card.Text>
                            <h2 className="my-4">Speacialists</h2>
                            <div className='d-md-flex flex-xs-column text-center'>
                                <div className='spe-list'>
                                    <img src={matchedItem?.speacialist[0]} alt="" />
                                    <div className='spe-content'>
                                        <h4>Dr. Robert Davis</h4>
                                        <p>Cardilogy Specialist</p>
                                        <input className='bg-light mb-2 text-center' type="text" placeholder="Main Oparation Room" readOnly />
                                    </div>
                                </div>
                                <div className='spe-list'>
                                    <img src={matchedItem?.speacialist[1]} alt="" />
                                    <div className='spe-content'>
                                        <h4>Dr. Kristina Castle</h4>
                                        <p>Surgeon</p>
                                        <input className='bg-light mb-2 text-center' type="text" placeholder="1st Floor, 113-Room" readOnly />
                                    </div>
                                </div>
                                <div className='spe-list'>
                                    <img src={matchedItem?.speacialist[2]} alt="" />
                                    <div className='spe-content'>
                                        <h4>Dr. Helen Wilmore</h4>
                                        <p>Pediatrician</p>
                                        <input className='bg-light mb-2 text-center' type="text" placeholder="2nd Floor, 215-Room" readOnly />
                                    </div>
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </Container>
    );
};

export default Detail;