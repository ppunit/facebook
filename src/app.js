import React from "react";
import Data from "./input";
import Comment from "./addcomment";
import TextField from './textField'
import Likefeed from "./likefeed";
import Select from './select'

class facebook extends React.Component {
  constructor() {
    super();
    this.state = {
      fbdata: Data,
      like: "",
      optionHandler: ""

    };
    this.updateComment = this.updateComment.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.likeshandler = this.likeshandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }
  selectHandler(event) {
    this.setState({
      optionHandler: event.target.value
    })

  }


  likeshandler(id) {
    // let data = JSON.parse(JSON.stringify(this.state.fbdata));
    this.setState(state => {
      return {
        ...state,
        fbdata: state.fbdata.map(feed => {
          if (feed.id === id && feed.isLiked === false) {
            return {
              ...feed,
              likes: feed.likes + 1,
              isLiked: true
            };
          }
          else if (feed.id === id && feed.isLiked === true) {
            return {
              ...feed,
              likes: feed.likes - 1,
              isLiked: false
            };
          }
          return feed;
        })
      };
    });

  }

  handleKeyPress(e) {
    let comment = e.target.value;
    if (e.key === "Enter") {
      this.comment = e.target.value;
      this.updateComment(comment);
    }
  }
  updateComment(usercomment, id) {
    console.log(id);

    let newComment = {};
    newComment = {
      comment: usercomment,
      created_at: new Date().toDateString()
    };

    let data = JSON.parse(JSON.stringify(this.state.fbdata));
    data.map((feed) => {

      if (feed.id === id) {
        // oldercomment = feed.comments;
        // oldercomment.push(newComment);
        // feed.comments = oldercomment;
        feed.comments.push(newComment)

      }

    })
    console.log(data);

    this.setState({
      fbdata: data
    });

  }
  render() {
    //console.log(this.state.fbdata)
    let option = this.state.optionHandler

    let selectedData = [];
    switch (option) {
      case "Image":
        console.log(option)
        selectedData = this.state.fbdata.filter(feed => feed['image'])
        break;

      case "Text":
        console.log(option)
        selectedData = this.state.fbdata.filter(feed => !feed["image"]);
        break;

      case "No":
        selectedData = [];
        break;

      default:
        selectedData = this.state.fbdata
        break;
    }


    let styles = {
      backgroundColor: this.state.fbdata.isliked ? "red" : "white"
    };
    console.log(this.state.like);
    return (
      <div>
        <Select selectHandler={this.selectHandler} />
        {selectedData.map((feed, index) => {


          return (
            <div key={feed.id}>
              <TextField text={feed.item_description} />
              <Likefeed imgsrc={feed.image} like={feed.likes}
                style={styles}
                likes={this.likeshandler.bind(this, feed.id)}
              />

              <Comment comment={feed.comments} updatecomment={this.updateComment} id={feed.id} />

            </div>
          );
        })}
      </div>
    );
  }
}
export default facebook;
