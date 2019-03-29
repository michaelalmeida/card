import React from 'react';
import { NavLink } from "react-router-dom";

import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact activeClassName="active" to="/">Página Inicial</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-flat-one">Flat</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-kid-one">Criança</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-classic-one">Clássico</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-brazil-one">Brasil</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-study-one">Estudo</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-mobile-one">Celular</NavLink></li>
                <li><NavLink activeClassName="active"to="/card/card-light-one">Leve</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;