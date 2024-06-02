import './CardsBotton.css';
import { posts } from '../../data';
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';
import Cocktails from '../Cocktails/Cocktails';

function CardsBotton() {
    
    const postsSlice = posts.slice(0, 4);
    const color = useContext(myContext);
    return (
        <div className='cards-botton-container'>
            {/* {postsSlice.map((post, index) => (
                <div key={index} className={`cards-botton-item-${color[0]}`}>
                    <img className='cards-botton-item__image' src={post.image} alt={post.title} />
                    <div className='cards-botton-text-block'>
                        <p className='cards-botton-text-block__date'>{post.date}</p>
                        <h2 className={`cards-botton-text-block__title-${color[0]}`}>{post.title}</h2>
                        
                    </div>
                </div>
            ))} */}
            <Cocktails></Cocktails>
        </div>
    );
}

export default CardsBotton;


// export default class CardsBotton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null;
//         }
//     }


//     render() {

//     }
// }