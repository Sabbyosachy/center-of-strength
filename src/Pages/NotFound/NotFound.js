import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <img width="100%" src="https://png.pngtree.com/png-vector/20200609/ourlarge/pngtree-hand-drawn-business-computer-404-error-illustration-png-image_2220264.jpg" alt=""/>
            <div className="text-center mt-5">
            <Link to="/home"><button className="btn__regular">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;