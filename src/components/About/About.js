import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import about from '../../image/aboutus.png';
import img from '../../image/doctor2.svg';
import './About.css';

const About = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();

    return (
        <Container>
            <div className='text-center'>
                <h2 className='my-4 text-muted'>About Us</h2>
                <p className='fs-5 icon'>Our Services Review from many peoples</p>
                <img className='img-fluid' src={about} alt="" />
                <div className='about-form row mb-5'>
                    <div className='col-md-6 col-12'>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div className='col-md-6 col-12'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='text-muted'>Contact Us</h3>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} placeholder='Eamil' {...register("eamil", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                            <input placeholder='Address' {...register("address")} />
                            <input placeholder='City'  {...register("city")} />
                            <input placeholder='Country'  {...register("country")} />
                            <input placeholder='Phone Number'  {...register("phonenumber")} />

                            <input className='btn-form' type="submit" value='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;