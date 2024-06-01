import './SingInForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';

function SingInForm() {
    const color = useContext(myContext);
    return (  
        <>
            <div className={`background-sing-in-form-${color[0]}`}>
                <div className='block-titile-sing-in-form'>
                    <a className='block-titile-sing-in-form__button-back-to-home' href="#">Back to home</a>
                    <Title textOfTitle="Sign In"></Title>
                </div>
            <form className={`sing-in-form-${color[0]}`} action="">
                <div className='input-block'>
                    <p className={`input-block__notice-${color[0]}`}>Your password has been changed !</p>
                    <Input inputClass='input-container__input-place' inputName='Email' inputType='text' inputPlaceholder='Your email'></Input>
                    <Input inputClass='input-container__input-place' inputName='Password' inputType='password' inputPlaceholder="Your password"></Input>

                </div>
                <Button text="Sign in"></Button>
                <p className='sing-in-form__question'>Don’t have an account? <a className='question__sign-in'>Sign Up</a></p>
            </form>

            </div>
        </>
    );
}

export default SingInForm;