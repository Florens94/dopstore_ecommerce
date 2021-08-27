import React, {useState} from 'react';
import logo from "./logo.png"
import './navbar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'


const NavBar = () => {

    const [links] = useState([
        {name: 'NIKON', url: '/category/nikon'}, 
        {name: 'CANON', url: '/category/canon'}, 
        {name: 'SONY', url: '/category/sony'}
      ])
    
    return(
        <header >
            <nav className="navbar-items">
                <Link to='/' className="navbar-logo">
                    <img src={logo} alt={"logo"}/>
                </Link>
                <ul className="nav-menu">
                    {links.map((link, i) => {
                    return (<li  key={i}><Link className="nav-link" to={link.url}>{link.name}</Link></li>)
                    })}
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;