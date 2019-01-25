import React from "react";
import Data from "./data";
import Select from "./selection";
import Post from "./post";

class Facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      fbdata: Data,
      optionHandler: "All"
    };
    this.updateComment = this.updateComment.bind(this);

    this.likeshandler = this.likeshandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.updateOnSelect();
  }
  selectHandler(event) {
    this.setState({
      optionHandler: event.target.value
    });
  }
  selectedData = [];

  updateOnSelect() {
    let option = this.state.optionHandler;

    switch (option) {
      case "Image":
        console.log(option);
        this.selectedData = this.state.fbdata.filter(feed => feed["image"]);
        break;

      case "Text":
        console.log(option);
        this.selectedData = this.state.fbdata.filter(feed => !feed["image"]);
        break;

      case "No":
        this.selectedData = [];
        break;

      default:
        this.selectedData = this.state.fbdata;
        break;
    }
  }

  likeshandler(id) {
    let onlikes=this.state.fbdata.map(feed=>{
      if(feed.id===id)
      {
        console.log(id);
        return feed.isLiked
          ?{...feed, likes:feed.likes + 1, isLiked:false}
          :{...feed,likes:feed.likes - 1,isLiked:true}
        
      }
      return feed
    })
    
    this.setState({
      fbdata:onlikes
    })
    console.log(this.state.fbdata)
    
  }

  updateComment(usercomment, id) {
    console.log(id);

    let newComment = {};
    newComment = {
      comment: usercomment,
      created_at: new Date().toDateString()
    };

    let addedComment= this.state.fbdata.map(feed => {
        if (feed.id === id) {

          return {...feed,comments: [...feed.comments,newComment]};

        }
        return feed;
      })
      this.setState({
        fbdata:addedComment
      })
    
  }
  render() {
    this.updateOnSelect();
    console.log('in render', this.selectedData)
    return (
      <div>
        <Select selectHandler={this.selectHandler} />
        {this.selectedData.map((feed) => {
          return (
            <div key={feed.id}>
              <Post
                feed={feed}
                likeshandler={this.likeshandler.bind(this, feed.id)}
                updateComment={this.updateComment}
                id={feed.id}
              />
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
export default Facebook;
