import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";




const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogPerson}>
                <div className={classes.person}><NavLink to='/dialogs/1'>Alex1</NavLink></div>
                <div className={classes.person}><NavLink to='/dialogs/2'>Alex2</NavLink></div>
                <div className={classes.person}><NavLink to='/dialogs/3'>Alex3</NavLink></div>
                <div className={classes.person}><NavLink to='/dialogs/4'>Alex4</NavLink></div>
                <div className={classes.person}><NavLink to='/dialogs/5'>Alex5</NavLink></div>
            </div>

            <div className={classes.messeges}>
                <div className={classes.messege}>Hello1</div>
                <div className={classes.messege}>Hello2</div>
                <div className={classes.messege}>Hello3</div>
                <div className={classes.messege}>Hello4</div>
                <div className={classes.messege}>Hello5</div>
            </div>
        </div>







    )



}
export default Dialogs;