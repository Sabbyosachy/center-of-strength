import React from 'react';
import "./Banner.css";

//banner handing text and button
const Banner = () => {
    return (
        <div className="banner">
            <div className="title">
               <h1>Center Of Strength <br /> GYM</h1>
               <p className="subtitle">In Home, Outdoors & Online</p>
               <br />
                <button className="btn__regular mx-auto text-xl">
                    Book A Trail Sesson
                </button>
            </div>
        </div>
    );
};

export default Banner;