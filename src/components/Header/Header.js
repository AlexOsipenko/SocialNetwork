import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
        <header className={style.header}>
            <img src='https://w7.pngwing.com/pngs/649/377/png-transparent-vkontakte-font-awesome-computer-software-computer-icons-model-logo-twitter-hd-black-группа-вконтакт.png'/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.email
               : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>

    )
}

export default Header
