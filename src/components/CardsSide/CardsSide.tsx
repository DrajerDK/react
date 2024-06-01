import './CardsSide.css';
import { posts } from '../../data';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';

function CardsSide() {
    const postsSlice = posts.slice(4, 10);
    const color = useContext(myContext);
    return (
        <div className='cards-side-container'>
            {postsSlice.map(post => (
            <div key={post.id} className={`cards-side-item-${color[0]}`}>
                <div className='cards-side-text-block'>
                    <p className='cards-side-text-block__date'>{post.date}</p>
                    <h2 className={`cards-side-text-block__title-${color[0]}`}>{post.title}</h2>
                </div>
                <img className='cards-side-container__image' src={post.image} alt={post.title} />
            </div>
            ))}
        </div>
        );
}


export default CardsSide;
