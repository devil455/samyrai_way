import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css'







const Message = (props) => {
    <div><h3>Сообщения:</h3></div>
    let path = '/dialogs/mes/' + props.id;
    return (
        <div className={classes.messages}>
            <div><h5>Сообщениe:</h5></div>
        <NavLink to={path}>{props.id}</NavLink>;
        </div>
    )
}


export default Message;