import React from 'react'
class selectField extends React.Component{
    render(){
        return(
            <div>
                <select className="select-type">
                    
                <option>Select Type</option>
                <option>Text Only</option>
                <option>Messages Only</option>
                <option>Images and Text</option>
                <option>NO items</option>
                </select>
        </div>
        )
    }

}
export default selectField