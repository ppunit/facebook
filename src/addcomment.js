import React from "react";
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        newComment: ''
    }

    //this.updateComment = this.updateComment.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
   
    if (e.key === "Enter") {
      console.log(this.props.id) 
      this.props.updatecomment(this.state.newComment,this.props.id);
      this.setState({
        newComment: ''
      })
    }
  }
  handleChange = e => {
    this.setState({
      newComment: e.target.value
    })
  }
  render() {
    return (
        
      <div>
          <div>
              
                {this.props.comment.map((comments) => {
                  console.log(comments)  
                  return (
                    <div className="comment" key={comments.created_at}>
                      <p>{comments.comment}</p>
                      <p>{comments.created_at}</p>
                    </div>
                  );
                })}


              </div>
        <div>
          <input
            type="text"
            id="replying-comment"
            value={this.state.newComment}
            placeholder="Reply to comment.."
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
export default Comment;
