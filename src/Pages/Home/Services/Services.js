import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
// load services data
    useEffect(()=>{
        fetch('./Fakedata.json')
        .then(res=> res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className="services" id="services">
            
            <h1>All Available Services</h1>
            <span>Choose Your Services</span>
            {/* show all services */}
            <div className="grid md:grid-cols-3 sm:grid-cols-1 show__item">
                {
                    services.map(service=>
                        <div className="service m-10" key={service.id}>
                            <div>
                            <img src={service.img} alt="" />
                            </div>
                            <div className="iteams">
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                                <br />
                                <h6>Gender: {service.For}</h6>
                                <h6>Fee: {service.fee}</h6>
                                <Link to ={`services/${service.id}`}>
                                    <br />
                                    <button className="btn__regular">Learn More</button>
                                </Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Services;