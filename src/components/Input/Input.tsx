import { useContext, useState } from 'react';
import { IInput } from '../../types/interfaces';
import './Input.css'
import { myContext } from '../../providers/ThemeContext';

function Input({inputType, inputPlaceholder, inputName, inputClass}: IInput) {
    const [text, setText] = useState("");
    const color = useContext(myContext);
    // function handleChange(e: any): void {
    //     setText(e.target.value)
    // }


    return ( 
        <>
            <div className='input-container'>
                <label className={`input-place__title-${color[0]}`} htmlFor="inputPlace">{inputName}</label>
                <input id="inputPlace" placeholder={inputPlaceholder} className={inputClass} value={text} type={inputType} onChange={(e) => setText(e.target.value)}/>
                
            </div>
        </>
    );
}

export default Input;