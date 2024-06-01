import { ITabs } from '../../types/interfaces';
import './Tabs.css';



function Tabs({tabNameOne, tabNameTwoo, tabNameThree}: ITabs) {
    return (
        <>
            <div className="container-tabs">
                <a className="container-tabs__tab">{tabNameOne}</a>
                <a className="container-tabs__tab">{tabNameTwoo}</a>
                <a className="container-tabs__tab">{tabNameThree}</a>
            </div>
        </>
    )
}

export default Tabs;