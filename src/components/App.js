import React, {useState} from "react";
import video from "../data/video.js";
import RenderVideo from "./RenderVideo.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(video.comments);
  
  function handleShowComments () {
    comments.length === 0 ? setComments(video.comments) : setComments([])
    setShowComments(!showComments);
  }

  function handleUpvotes () {
    setUpvotes(upvotes + 1);
  }

  function handleDownvotes () {
    setDownvotes(downvotes + 1);
  }

  return (
    <div className="App">
      <RenderVideo video={video} onHandleUpvotes={handleUpvotes} onHandleDownvotes={handleDownvotes} upvotes={upvotes} downvotes={downvotes}/>
      <Comments video={video} onHandleShowComments={handleShowComments} showComments={showComments} comments={comments}/>
    </div>
  );
}

export default App;
