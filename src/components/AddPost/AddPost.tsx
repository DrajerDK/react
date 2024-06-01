import './AddPost.css';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea'
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';

function AddPost() {
    const color = useContext(myContext);
    return (  
        <div className={`background-${color[0]}-theme`}>
        <div className='block-titile-add-post-form'>
            <a className='block-titile-add-post-form__button-back-to-home' href="#">Home</a>
            <Title textOfTitle="Add post"></Title>
        </div>
    <form className={`add-post-form-${color[0]}`} action="">
        <div className='add-post-input-block'>
            <Input inputClass='add-post-input-block__title-post' inputName='Title' inputType='text' inputPlaceholder='Title'></Input>
            <div className='add-post-image-block'>
                <Input inputClass='add-post-image-block__lesson-number-title' inputName='Lesson number' inputType='text' inputPlaceholder='Lesson number'></Input>
                <Input inputClass='add-post-image-block__image-place' inputName='Image' inputType='text' inputPlaceholder="Image"></Input>
            </div>
            <Textarea textareaClass='add-post-input-block__description' textareaName='Description' textareaPlaceholder='Add your text' textareaType='text'></Textarea>
            <Textarea textareaClass='add-post-input-block__post-text' textareaName='Text' textareaPlaceholder='Add your text' textareaType='text'></Textarea>

        </div>
        <div className='add-post-button-block'>
            <button className='add-post-button-block__delete-post-button'>Delete post</button>
            <div className='add-post-button-right-block'>
                <button className='add-post-button-right-block__cancel-button'>Cancel</button>
                <button className='add-post-button-right-block__add-post-button'>Add post</button>
            </div>

        </div>
    </form>

    </div>
    );
}

export default AddPost;