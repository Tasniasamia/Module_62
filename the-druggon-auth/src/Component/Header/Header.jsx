import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import moment from 'moment';
import './Header.css';
const Header = () => {
    return (
        <div className='container'>
            <div className='flex justify-center text-center'>
            <div>
                
<img src={logo} alt="logo" />
<p>Journalism Without Fear or Favour</p>
<div>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</div></div>

            </div>
            <div className='flex justify-center items-center my-5'>
        <div className='navbar2'>
         <Link to="/">Home</Link>
         <Link to="/About">About</Link>
         <Link to="/Resister">Resister</Link>
         <Link to="/Login">Login</Link>

        </div></div>
        </div>
    );
};

export default Header;