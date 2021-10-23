import React from 'react';
import './JoinNow.css';

//Join now from 

const JoinNow = () => {
    return (
        <div className="appointment__container pt-5 pb-10">

            <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="name" name="name" placeholder="First name.."/>
                
                <label htmlFor="fname">Last Name</label>
                <input type="text" id="name" name="name" placeholder="Last name.."/>
                
                <label htmlFor="age">Age</label>
                <input type="number" id="name" name="age" placeholder="Your age.."/>

                <label htmlFor="number">Mobile No.</label>
                <input type="text" id="number" name="number" placeholder="Your Mobile No.."/>
                
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="text" placeholder="Your Address.."/>


                <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default JoinNow;