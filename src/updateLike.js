import React from "react";

function updateLike(props) {
  return (
    <div className="image-feed">
      <button style={props.style} className="like-button" onClick={props.onlike}>
        Like button
      </button>
    </div>
  );
}

export default updateLike;
