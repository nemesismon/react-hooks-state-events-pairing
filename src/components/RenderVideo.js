import React from "react";

function RenderVideo ({ video, onHandleUpvotes, onHandleDownvotes, upvotes, downvotes }) {

    return (
    <div className="iframe">
      <div>
      <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />
      </div>
        <div>
          <h1>{video.title}</h1>
        </div>
        <div>
          <p>{video.views} Views | Uploaded {video.createdAt}</p>
        </div>
        <div>
          <button name="upvotes" onClick={onHandleUpvotes}>{upvotes} 👍</button>
          <button name="downvotes" onClick={onHandleDownvotes}>{downvotes} 👎</button>
        </div>
        <ul></ul>
    </div>
      )

}

export default RenderVideo;