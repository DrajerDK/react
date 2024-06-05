import './Header.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";

import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import Context from '../../Context/Context';




function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    let theme = 'light-theme';
    const navigate = useNavigate();
    return (  
        <>
            <section className="header-container">
                <h2 onClick={() => navigate(`/`)} className='header-container__title'>The Cocktail</h2>
                <div className='header-right-block'>
                    <div className='header-right-block-search'>
                      <Link className='header-right-block-search__random-button' to={"/random"}>Can't choose?<br/>Click on this text</Link>
                      <Input inputClass='header-right-block-search__input-place' inputType='text' inputPlaceholder="Search..."/>
                    </div>
                    <div className='header-right-block-favorites'>
                        <FaRegStar className='header-right-block-favorites__icon'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
