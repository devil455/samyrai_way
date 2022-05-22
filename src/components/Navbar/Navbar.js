import React from "react";
import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={classes.nav}>
            <div>NAVBAR:</div>
            <div>Профиль</div>
            <div>Сообщения</div>
            <div>Новости</div>
            <div>Музыка</div>
            <div></div>
            <div>Настройки</div>


        </header>

    )
}

export default Navbar;