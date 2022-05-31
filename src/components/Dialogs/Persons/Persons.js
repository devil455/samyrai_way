import React from "react";
import classes from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";


const Persons = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.persons}>
            <div><h5>Имя:</h5></div>
            <NavLink to={path}>{props.name}</NavLink>;
        </div>
    )
}


export default Persons;