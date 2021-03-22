
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';

import logo from '../../images/logo.png';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        {/* <Link to="/home">Home</Link> */}
                        <Link to="/login">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Destination</Link>

                    </li>
                    <li>
                        {/* <Link to="login/">Book</Link> */}
                        <Link className="/login" to="/login">Book</Link>
                    </li>
                    <li>
                        {/* <Link to="login/">Book</Link> */}
                        <Link className="/login" to="/book">BookDetails</Link>
                    </li>
                    
                    {/* <li> */}
                         {/* <Link className="btn-book" to="/login">Book</Link> */}
                         {/* <Link className="/login" to="/login">Book</Link> */}
                    {/* </li> */}

                    <li>
                        {/* <Link to="/login"><Button>Login</Button></Link> */}
                        <Link to="/login"> <Button variant="warning">Login</Button>{' '}</Link>
                    </li>
                    
                    
                </ul>
            </nav>
            <div className="title-container">
                <h1>World City Tour</h1>
                {/* <h2>A global icon of luxury</h2> */}
            </div>
        </div>
    );
};

export default Header;
