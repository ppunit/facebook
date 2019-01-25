import React from "react";
import AddComment from "./addcomment";

import UpdateLike from "./updateLike";

function post(props) {
  return (
    <div key={props.feed.id}>
      <div className="text-field">
        {props.feed.item_description?<p> {props.feed.item_description} </p>:null}
      </div>
      <div className="image-likes-container">
      {props.feed.image?<img src={props.feed.image} alt="" />:null}
        <p> No of Likes: {props.feed.likes} </p>
      </div>
      <UpdateLike onlike={props.likeshandler} />
      <div>
        {props.feed.comments.map(comment => {
          console.log(comment);
          return (
            <div className="comment" key={comment.created_at}>
              <p> {comment.comment} </p> <p> {comment.created_at} </p>
            </div>
          );
        })}
      </div>
      <AddComment updatecomment={props.updateComment} id={props.id} />
    </div>
  );
}
export default post;
