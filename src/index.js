import React  from 'react';
import ReactDom from 'react-dom';
import App from './app'
require('./style.css');



class MyApp extends React.Component{
    //-------------------------------
    render(){
    return(
        <div className="timeline">
            <App/>
        </div>

    )
    }
}
 

ReactDom.render(<MyApp/>,document.getElementById('root'));
