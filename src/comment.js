import React from 'react'
class Comment extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                prop: this.props.comment,


            }
            this.updateComment = this.updateComment.bind(this);
            this.handleKeyPress = this.handleKeyPress.bind(this);

        }

        handleKeyPress(e) {
            let comment = e.target.value
            if (e.key === 'Enter') {
                this.comment = e.target.value
                this.updateComment(comment)
            }



        }
        updateComment(event) {
            //console.log(event);
            let oldercomment = [];
            oldercomment = this.state.prop;
            console.log(oldercomment)
            let newComment = {};
            newComment = {
                'comment': event,
                'created_at': new Date().toDateString()
            }
            oldercomment.push(newComment);
            oldercomment.push()
            console.log(newComment);
            this.setState({
                prop: oldercomment

            })

        }
        render() {
                return (
            <div>
                   {this.state.prop.map((comments,index)=>{
                       return(
                        
                       <div className="comment">
                         <p>{comments.comment}</p>
                         <p>{comments.created_at}</p>
                       </div>
                      

                             ); 
                       })
                    }  
                 <div>
                
                    <input type="text"  id="replying-comment" placeholder="Reply to comment.." onKeyPress={this.handleKeyPress} />
                
                  </div>
            </div>

        )
    }
}



export default Comment;