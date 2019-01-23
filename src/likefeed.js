import React from "react";

function likefeed(props) {
  return (
    <div className="image-feed">
        <img src={props.imgsrc} alt="" />
        <p>No of Likes:{props.like}</p>
      <button style={props.style} className="like-button" onClick={props.likes}>
        Like button
      </button>
    </div>
  );
}

export default likefeed;
