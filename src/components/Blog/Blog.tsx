import './Blog.css'
import Title from '../Title/Title';
import CardMain from '../CardMain/CardMain';
import CardsBotton from '../CardsBotton/CardsBotton';
import CardsSide from '../CardsSide/CardsSide';
import '../../../src/'
import { useContext } from 'react';
import { myContext } from '../../providers/ThemeContext';

function Blog() {
    const color = useContext(myContext);
    console.log(color)
    return (  
        <>
            <div className={`blog-background-${color[0]}` }>
                <div className='blog-container'>
                    {/* <Title textOfTitle='Cocktails'></Title> */}
                    <div className='posts-main-block'>
                        <div className='posts-left-block'>
                            {/* <CardMain></CardMain> */}
                            <CardsBotton></CardsBotton>
                        </div>
                            {/* <CardsSide></CardsSide> */}
                    </div>
                </div>
            </div>




        </>
    );
}

export default Blog;