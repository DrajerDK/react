import './CardMain.css';

import { posts } from '../../data';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';

function CardMain() {
    const post = posts[0];
    const color = useContext(myContext);
    return (
        <>
        <div className={`card-main-container-${color[0]}`}>
            <div className='card-main-text-block'>
                <p className='card-main-text-block__date'>{post.date}</p>
                <h2 className={`card-main-text-block__title-${color[0]}`}>{post.title}</h2>
                <p className='card-main-text-block__text'>{post.text}</p>
            </div>
            <img className='card-main-container__image' src={post.image} alt={post.title} />
        </div>
        </>
    );
}

export default CardMain;

