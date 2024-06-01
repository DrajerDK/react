import { useContext } from 'react';
import './Title.css';
import { myContext } from '../../providers/ThemeContext';


function Title({textOfTitle}: {textOfTitle: string}) {
    // let initial = username.split(" ").reduce(((result, item) => result + item[0]), "");
    // let textOfTitle = "";
    const color = useContext(myContext);
    return ( 
        <>
        {/* <div className='container'> */}
            <h3 className={`contaiter__title-${color[0]}`}>{textOfTitle}</h3>


            {/* <div className='container__initial'>{initial}</div>
            <div className='container__name'>{username}</div> */}
        {/* </div> */}
        </>
    );
}

export default Title;