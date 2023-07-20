import { useState } from "react";
import { postCommentByArticleId } from "../api";

const username = "tickle122"; // TODO - useContext to store logged in username

const CommentForm = ({ article_id, setComments, setCommentCount }) => {
  const [isActive, setIsActive] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [isPosting, setIsPosting] = useState(false)
  const [isError, setIsError] = useState(false);

  const addComment = (e) => {
    e.preventDefault();
    setIsPosting(true)
    const newComment = { username, body: commentInput };
    
    // Render optimistically
    const optimisticPostedComment = {
      comment_id: -1,
      body: commentInput,
      article_id,
      author: username,
      votes: 0,
      created_at: new Date(),
    };
    setComments((currentComments) => [
      optimisticPostedComment,
      ...currentComments,
    ]);
    setCommentCount((currentCommentCount) => Number(currentCommentCount) + 1);

    // Actually post new comment
    postCommentByArticleId(article_id, newComment)
      .then(() => {
        setIsPosting(false)
        setIsError(false);
        setCommentInput("");
      })
      .catch(() => {
        // Undo optimistic render and show error
        setComments((currentComments) => currentComments.slice(1));
        setCommentCount((currentCommentCount) => currentCommentCount - 1);
        setIsError(true);
      });
  };

  return (
    <form className="comment-card comment-form" onSubmit={addComment}>
      <textarea
        placeholder="Add a comment..."
        value={commentInput}
        onFocus={() => setIsActive(true)}
        onChange={(e) => {
          setCommentInput(e.target.value);
        }}
      ></textarea>
      <button
        type="submit"
        disabled={!commentInput.length || isPosting}
        style={{ display: `${isActive ? "inline-block" : "none"}` }}
      >
        Comment
      </button>
      <button
        type="reset"
        style={{ display: `${isActive ? "inline-block" : "none"}` }}
        onClick={() => {
          setIsError(false);
          setCommentInput("");
          setIsActive(false);
        }}
      >
        Cancel
      </button>
      {isError ? (
        <p className="comment-error">Sorry, your comment could not be posted</p>
      ) : null}
    </form>
  );
};

export default CommentForm;