import React from "react";
import classes from './Navbar.module.css'


const Navbar = () =>{
    return( <nav className={classes.nav}>
      <div>Navbar:</div>
    <div className={classes.item}>
      Profile 
      </div>
    <div className={classes.w}>
      Massage
      </div>
    <div className={classes.s}>
      News
      </div>
    <div className={classes.c}>
      Music
      </div>
      <div className={classes.sa}>
        Settings
      </div>
    </nav>
    )
}

export default Navbar;