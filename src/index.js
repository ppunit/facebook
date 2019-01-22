import React  from 'react';
import ReactDom from 'react-dom';

import Facebook from './facebookUI'
import Face from './facebook'
require('./style.css');



class MyApp extends React.Component{
    //-------------------------------
    render(){
    return(
        <div className="timeline">
            <Face/>
        </div>

    )
    }
}
 

ReactDom.render(<MyApp/>,document.getElementById('root'));
