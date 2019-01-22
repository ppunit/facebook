import React from 'react'
import ReactDom from 'react-dom';
import input from './input'
import Comment from './comment'
import TextField from './textField'
import ImageFeed from './imagefeed'
import Select from './select'
class facebook extends React.Component{
    constructor(){
        super();
        this.state={
            fbdata:input
        }
        this.check=this.check.bind(this);
    }
    check(){
        this.state.fbdata.map((feed,index)=>{
            console.log(feed.comments);
        })
    }
    render(){
        return(
            <div>
            {this.state.fbdata.map((feed,index)=>{
                return(
                    <div>
               
                <TextField text={feed.item_description}/>
                <ImageFeed imgsrc={feed.image} likes={feed.likes} index={index}/>
                <Comment comment={feed.comments}/>
                <button onClick={this.check}>Check</button>
                </div>
                );    
            })}
           
            </div>
        )
    }
}
export default facebook;