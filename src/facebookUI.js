import React from 'react'
import ReactDom from 'react-dom';
import input from './input'
class facebook extends React.Component{
    constructor(){
        super();
        this.state={
            data:input
        }

    }
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
                <div className="text-field">
                    <p>{this.state.data[0].item_description}</p>
                    <button className="like-button">Like button</button>
                </div>
                <div className="comment">
                    <p>Comments</p>
                </div>
                <div>
                
               <input type="text"  id="replying-comment"  placeholder="Reply to comment.."/>
                </div>
                <div className="image-feed">
                    <img src={this.state.data[1].image}/>
                    <button className="like-button">Like button</button>
                    
                </div>
                <div className="comment">
                    <p>Comments</p>
                </div>
                <div>
                
               <input type="text"  id="replying-comment" placeholder="Reply to comment.."/>
                </div>
                
            </div>
        )
    }
}
export default facebook;