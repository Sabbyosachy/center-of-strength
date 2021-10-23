import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./Header.css";

//Route set
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="flex p-3 justify-around items-center flex-wrap header md:sticky top-0 bg-white">
            <div className="text-2xl">
                <Link to="/home">
                    <h1 className="font-bold">Center Of<span className="text-red-400"> Strength</span></h1>
                </Link>
            </div>
            <div className="font-semibold">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/home">Home</Link>
                </li>
                <li className="mr-6">
                    <HashLink to="/home#services">Services</HashLink>
                </li>
                <li className="mr-6">
                    <Link to="/trainer">Trainer</Link>
                </li>
                <li className="mr-6">
                    <Link to="/joinnow">Join Now</Link>
                </li>
                </ul>
            </div>
            <div className="buttons">
                {
                    !user.email ? <Link to="/login"><button type="button" className="btn__regular">Login</button></Link> :
                    <div className="login__section">
                        <h2 className="mr-4">Hello <span className=" text-red-400 font-bold">{user.displayName}</span></h2>
                    <button type="button" onClick={logOut} className="btn__regular">LogOut</button>
                    </div>
                    }
            </div>
        </div>
    );
};

export default Header;