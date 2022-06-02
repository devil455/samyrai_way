import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={classes.nav}>
            <div className={classes.col}>NAVBAR:</div>
            <div><NavLink to="/profile">Профиль</NavLink></div>
            <div><NavLink to="/dialogs">Сообщения</NavLink></div>
            <div><NavLink to="/news">Новости</NavLink></div>
            <div><NavLink to="/music">Музыка</NavLink></div>
            <div><NavLink to="/settings">Настройки</NavLink></div>
            <div><NavLink to="/friends">Друзья</NavLink></div>


        </header>

    )
}

export default Navbar;