import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
            <NavLink to={path}>
                <div><img className={classes.dialog_ava} src={props.src} alt=""/></div>
                <div className={classes.dialog_name}>{props.name}</div>
            </NavLink>
        </div>
    )
}


export default DialogItem;
