import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return (
        <>
            <div className="footer gap-4 text-white grid items-center md:grid-cols-4 sm:grid-cols-2">
            <div>
                {/* Footer left section  */}
                    <h2>Contacts</h2>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>New York,US</li>
                        <li>Center of Strength@example.com</li>
                        <li>+55 324 908 76</li>
                        <li>+01 456 789 10</li>
                    </ul>
                </div>
                <div>
                    {/* footer middle section  */}

                    <h2>About</h2>
                    <ul>
                        <li>Trainers</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2>Services</h2>
                    <ul>
                        <li>Yoga</li>
                        <li>Free Hand Excersise</li>
                        <li>GYM</li>
                        <li>Women's Gyms</li>
                    </ul>
                </div>
                <div>
                    {/* footer right section  */}

                    <h2>Branches</h2>
                    <ul>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Houston</li>
                        <li>New York City</li>
                    </ul>
                </div>
            </div>

            {/* Copywerite  */}
            
            <div className="copyright text-white  justify-around p-5">
                <p className="ml-14">Copyright &copy; 2021 center of strength</p>
            </div>
            
           
        </>
    );
};

export default Footer;