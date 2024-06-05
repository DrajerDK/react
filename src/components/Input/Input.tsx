import { useContext, useState } from 'react';
import { IInput } from '../../types/interfaces';
// import './Input.css'
import { myContext } from '../../providers/ThemeContext';

function Input({inputType, inputPlaceholder, inputClass }: IInput) {
    const [text, setText] = useState("");
    const color = useContext(myContext);
    // function handleChange(e: any): void {
    //     setText(e.target.value)
    // }


    return ( 
        <>
            <input id="inputPlace" placeholder={inputPlaceholder} className={inputClass} value={text} type={inputType} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}

export default Input;