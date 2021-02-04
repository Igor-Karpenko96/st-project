import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Nav(props) {
    return (
    
    <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.activeLink}>news</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.activeLink}>music</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.activeLink}>settings</NavLink>
        </div>
       
    </nav>
        
    )
}

export default Nav
