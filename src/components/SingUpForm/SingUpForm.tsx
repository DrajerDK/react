import './SingUpForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

function SingUpForm() {
    return (  
        <>
            <div className='background-light-theme'>
                <div className='block-titile-sing-up-form'>
                    <a className='block-titile-sing-up-form__button-back-to-home' href="#">Back to home</a>
                    <Title textOfTitle="Sign Up"></Title>
                </div>
            <form className='sing-up-form' action="">
                <div className='input-block'>
                    <p className='input-block__notice'>Your password has been changed !</p>
                    <Input inputClass='input-container__input-place' inputName='Name' inputType='text' inputPlaceholder='Your email'></Input>
                    <Input inputClass='input-container__input-place' inputName='Email' inputType='text' inputPlaceholder='Your email'></Input>
                    <Input inputClass='input-container__input-place' inputName='Password' inputType='password' inputPlaceholder="Your password"></Input>
                    <Input inputClass='input-container__input-place' inputName='Confirm password ' inputType='password' inputPlaceholder="Your password"></Input>

                </div>
                <Button text="Sign Up"></Button>
                <p className='sing-up-form__question'>Already have an account? <a className='question__sign-in'>Sign In</a></p>
            </form>

            </div>
        </>
    );
}

export default SingUpForm;