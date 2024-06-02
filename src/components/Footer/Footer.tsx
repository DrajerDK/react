import { useContext } from 'react';
import './Footer.css'
import { myContext } from '../../providers/ThemeContext';

function Footer() {
    const color = useContext(myContext);
    return (  
        <>
            <div className={`footer-background-${color[0]}`}>
                <div className={`footer-container-${color[0]}`}>
                    <p className='footer-container__left-text'>©2024 The Cocktail</p>
                    <p className='footer-container__right-text'>All rights reserved</p>
                </div>
            </div>
        
        
        </>
    );
}

export default Footer;