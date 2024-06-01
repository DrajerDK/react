import { useContext, useState } from 'react';
import { ITextarea } from '../../types/interfaces';
import './Textarea.css'
import { myContext } from '../../providers/ThemeContext';

function Textarea({textareaType, textareaPlaceholder, textareaName, textareaClass}: ITextarea) {
    const [text, setText] = useState("");
    const color = useContext(myContext);
    // function handleChange(e: any): void {
    //     setText(e.target.value)
    // }


    return ( 
        <>
            <div className='textarea-container'>
                <label className={`textarea-place__title-${color[0]}`} htmlFor="inputPlace">{textareaName}</label>
                <textarea name="" id="textareaPlace" cols={30} rows={10} placeholder={textareaPlaceholder} className={textareaClass} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                {/* <input id="inputPlace" placeholder={inputPlaceholder} className={inputClass} value={text} type={inputType} onChange={(e) => setText(e.target.value)}/> */}
                
            </div>
        </>
    );
}

export default Textarea;