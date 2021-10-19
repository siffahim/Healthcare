import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../image/laboratory/2.jpg';
import img2 from '../../image/laboratory/3.jpg';
import img4 from '../../image/laboratory/4.png';

const Laboratory = () => {
    return (
        <Container>
            <div className='text-center'>
                <h2>Laboratory</h2>
                <img src={img1} alt="" />
                <p>Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. Rapaciously utilize enterprise experiences via 24/7 markets. Uniquely matrix economically sound value through cooperative technology competently parallel task fully researched data.
                    Quickly communicate enabled technology and turnkey leadership skills.Uniquely enable accurate supply chains rather than frictionless technology.Globally network focused materials vis-a-vis</p>
                <img src={img2} alt="" />
                <p>Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. Rapaciously utilize enterprise experiences via 24/7 markets. Uniquely matrix economically sound value through cooperative technology competently parallel task fully researched data.
                    Quickly communicate enabled technology and turnkey leadership skills.Uniquely enable accurate supply chains rather than frictionless technology.Globally network focused materials vis-a-vis</p>
                <img src={img4} alt="" />
            </div>
       </Container>
    );
};

export default Laboratory;