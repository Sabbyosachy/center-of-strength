import React, { useEffect, useState } from 'react';
import './AllTrainers.css';

const AllTrainers = () => {
    // load doctors data
    const [trainers, setTrainers] = useState([]);

    useEffect(()=>{
        fetch('./Trainerinfo.json')
        .then(res=>res.json())
        .then(data => setTrainers(data));
    },[])
    
    //trainers show by fetrching data 
    return (
        <div className="person">
            <h1 className>Our Trainers</h1>
            <span>Choose Your Trainer</span>
         
            <div className="grid md:grid-cols-2 sm:grid-cols-1 person__container">
                {
                    trainers.map(trainer=>
                        <div className="person_info" key={trainer.name}>
                            <div className="card">
                            <div>
                            <img src={trainer.img} alt="" />
                            </div>
                            <div className="p-5">
                                <h2>{trainer.name}</h2>
                                <span>Specialist : {trainer.specialist}</span> <br />
                                <p>Experience : {trainer.experience}</p>
                                <br />
                                <button className="btn__regular">Book Now</button>
                             
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllTrainers;