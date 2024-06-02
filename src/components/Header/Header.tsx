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
                <h2 className='header-container__title'>The Cocktail</h2>
                <div className='header-right-block'>
                    <div className='header-right-block-search'>
                        <IoSearch className='header-right-block-search__icon'/>
                    </div>
                    <div className='header-right-block-profile'>
                        <CgProfile className='header-right-block-profile__icon'/>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Header;
