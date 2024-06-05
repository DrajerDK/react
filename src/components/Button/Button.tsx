import { IButton } from '../../types/interfaces';
import './Button.css';


function Button({text, clickFunction}: IButton) {



    return ( 
        <>
            <button onClick={clickFunction} className='button'>{text}</button>
        </>
    );
}

export default Button;