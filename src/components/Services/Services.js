import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useData();
    return (
        <div id='service' className='mb-5'>
            <Container>
                <h2 className='my-5 text-muted'>Medical Services</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        services?.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;