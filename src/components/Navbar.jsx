import React from 'react';
import classes from './Navbar.module.css';

function Nav() {
    return (
    
    <nav className={classes.nav}>
        <div className={classes.item}>
            <a>profile</a>
        </div>
        <div className={classes.item}>
            <a>messages</a>
        </div>
        <div className={classes.item}>
            <a>news</a>
        </div>

        <div className={classes.item}>
            <a>music</a>
        </div>

        <div className={classes.item}>
            <a>settings</a>
        </div>
    </nav>
        
    )
}

export default Nav
