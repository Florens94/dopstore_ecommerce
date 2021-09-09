import React, {useState} from 'react';
import logo from "./logo.png"
import './navbar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import categories from '../../categories.json'


const NavBar = () => {
    
    return(
        <header >
            <nav className="navbar-items">
                <Link to='/' className="navbar-logo">
                    <img src={logo} alt={"logo"}/>
                </Link>
                <ul className="nav-menu" >
            {categories.map((category, i)=> {
                return (<li key={i}><Link className='nav-link' to={category.url}>{category.title}</Link></li>)})}
            <CartWidget/>
          </ul>
            </nav>
        </header>
    )
}
export default NavBar;