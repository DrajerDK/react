import Cocktails from '../Cocktails/Cocktails';
import './MainPage.css';
// import { posts } from '../../../data';
import { useContext } from 'react';
// import { myContext } from '../../../providers/ThemeContext';
// import Cocktails from '../';

function MainPage() {
    
    // const postsSlice = posts.slice(0, 4);
    // const color = useContext(myContext);
    return (
        <div className='main-page-container'>
            <Cocktails></Cocktails>
        </div>
    );
}

export default MainPage;

