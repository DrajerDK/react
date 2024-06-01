import { useContext, useState } from 'react';
import './Context.css';
import { myContext } from '../providers/ThemeContext';
import { FiSun, FiMoon } from "react-icons/fi";


function Context() {

    // const color = useContext(myComtext);
    let [topic, setTopic] = useContext(myContext);
    // function changeTopic() {
    //     setTopic(topic === "light" ? "dark" : "light");
    // }
    function changeToDark() {
        setTopic(topic === "light" ? "dark" : "dark");
    }
    function changeToLight() {
        setTopic(topic === "dark" ? "light" : "light");
    }
    return (  
        <>
            {/* <div className={`${topic}-background`}>
                AAAAA */}
                {/* <button onClick={changeTopic}>Switch to {topic}</button> */}
                {/* <button onClick={changeToDark}>Switch to dark</button>
                <button onClick={changeToLight}>Switch to light</button> */}
                <button onClick={changeToLight} className='light-theme-button' ><FiSun className='light-theme-button__icon'/></button>
                <button onClick={changeToDark} className='dark-theme-button' ><FiMoon className='dark-theme-button__icon'/></button>
            {/* </div> */}
        </>
    );
}

export default Context;