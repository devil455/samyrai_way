import React from "react";
import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={classes.nav}>
            <div>NAVBAR:</div>
            <div><a href="/profile">Профиль</a></div>
            <div><a href="/dialogs">Сообщения</a></div>
            <div>Новости</div>
            <div>Музыка</div>
            <div></div>
            <div>Настройки</div>


        </header>

    )
}

export default Navbar;