import React from "react";
import classes from './Navbar.module.css'


const Navbar = () =>{
    return(
        <header className={classes.nav}>
            <div>NAVBAR:</div>
            <div>Profile</div>
            <div>Massege</div>
            <div>Settings</div>


        </header>

    )
}

export default Navbar;