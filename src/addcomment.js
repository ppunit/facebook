import React from "react";
class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ''
    }

    //this.updateComment = this.updateComment.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {

    if (e.key === "Enter") {
      console.log(this.state.newComment)
      this.props.updatecomment(this.state.newComment, this.props.id);
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
        <input
          type="text"
          id="replying-comment"
          value={this.state.newComment}
          placeholder="Reply to comment.."
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>

    );
  }
}
export default AddComment;
