import { IButton } from '../../types/interfaces';
import './Button.css';


function Button({text}: IButton) {



    return ( 
        <>
            <button className='button'>{text}</button>
        </>
    );
}

export default Button;