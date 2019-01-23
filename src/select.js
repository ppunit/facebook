import React from 'react'
function selectField(props){
   return(
            <div>
                <select  defaultValue="All" className="select-type" onChange={props.selectHandler} >
                <option value="Text">Text Only</option>
                <option value="Image">Image</option>
                <option value="All">All</option> 
                <option value="No">NO items</option>
                </select>
            </div>
        )
    }
export default selectField