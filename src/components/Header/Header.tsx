import './Header.css';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import Context from '../../Context/Context';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    let theme = 'light-theme';
    return (  
        <>
            <section className="header-container">
                <div className="menu" onClick={toggleMenu}>
                    <IoMenu className='menu__icon'/>
                </div>
                <div className='header-right-block'>
                    <div className='header-right-block-search'>
                        <IoSearch className='header-right-block-search__icon'/>
                    </div>
                    <div className='header-right-block-profile'>
                        <CgProfile className='header-right-block-profile__icon'/>
                    </div>
                </div>
            </section>
            {isOpen && (
                <nav className='menu-block'>
                    <div className='menu-header'></div>
                    <ul className='menu-list'>
                        <li className='menu-list__item'>
                            Home
                        </li>
                        <li className='menu-list__item'>
                            Add post
                        </li>
                        <li className='menu-list__item'>
                            Profile
                        </li>
                    </ul>
                    <div className='theme-block'>
                        {/* <button className='light-theme-button'><FiSun className='light-theme-button__icon'/></button>
                        <button className='dark-theme-button'><FiMoon className='dark-theme-button__icon'/></button> */}
                        <Context></Context>
                    </div>
                    <button className="menu-block__log-out-button">Log Out</button>
                </nav>
            )}
        </>
    );
}

export default Header;
