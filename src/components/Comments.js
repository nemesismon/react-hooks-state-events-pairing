import React from "react";

function Comments ({onHandleShowComments, showComments, comments }) {

    // const [videoComments, setVideoComments] = useState([])

    const commentStatus = (showComments === true) ? "Hide Comments" : "Show Comments";

    // const numberOfComments = video.comments.length > 0 ? <h4> {video.comments.length} Comments </h4> : null;

    // if (showComments === true) {
    //     setVideoComments(comments.map((comment) => {
    //         return (
    //             <>
    //             <div>
    //                 <h4>{comment.user}</h4>
    //                 <p>{comment.comment}</p>
    //             </div>
    //             </>
    //         )  
    // }))} 

    const displayedComments = comments.map(comment =>  <div>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
    </div>)
    const numberOfComments = comments.length > 0 ? <h4> {comments.length} Comments </h4> : null;
    
    
    return (
        <div className="comment-section">
            <div className="comment-show-or-hide">
                <button onClick={onHandleShowComments}>{commentStatus}</button>
                <hr />
                {numberOfComments}
            </div>
            <div className="comments-rendered">
                {displayedComments}
            </div>
        </div>
    )

}

export default Comments;