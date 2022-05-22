import React from "react";
import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={classes.nav}>
            <div>NAVBAR:</div>
            <div><a href="/profile">Профиль</a></div>
            <div><a href="/dialogs">Сообщения</a></div>
            <div><a href="/news">Новости</a></div>
            <div><a href="/music">Музыка</a></div>
            <div><a href="/settings">Настройки</a></div>


        </header>

    )
}

export default Navbar;