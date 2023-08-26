import { useState } from "react";
import { postCommentByArticleId } from "../api";

const CommentForm = ({
  article_id,
  setComments,
  setCommentCount,
  username,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentInput) {
      return;
    }
    setIsPosting(true);
    const newComment = { username, body: commentInput };

    // Render optimistically
    const optimisticPostedComment = {
      comment_id: Date.now(),
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
      .then(({ comment }) => {
        // Update comment_id of optimisticPostedComment to allow deletion
        const postedCommentId = comment.comment_id;
        setComments((currentComments) => {
          const optimisticPostedComment = currentComments[0];
          optimisticPostedComment.comment_id = postedCommentId;
          return [optimisticPostedComment, ...currentComments.slice(1)];
        });
        setIsPosting(false);
        setIsError(false);
        setCommentInput("");
      })
      .catch(() => {
        // Undo optimistic render and show error
        setComments((currentComments) => currentComments.slice(1));
        setCommentCount(
          (currentCommentCount) => Number(currentCommentCount) - 1
        );
        setIsError(true);
      });
  };

  const handleReset = (e) => {
    setIsError(false);
    setCommentInput("");
    setIsActive(false);
  };

  const handleBlur = (e) => {
    if (e.relatedTarget) {
      if (e.relatedTarget.type === "submit" && !commentInput) {
        return;
      }
      if (e.relatedTarget.type === "reset") {
        handleReset();
      }
    }
    if (!commentInput) {
      setIsActive(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      className="comment-card comment-form"
    >
      <textarea
        placeholder="Add a comment..."
        value={commentInput}
        onFocus={() => setIsActive(true)}
        onChange={(e) => {
          setCommentInput(e.target.value);
        }}
      ></textarea>
      <div className="button-container">
        <button
          type="submit"
          className={!commentInput || isPosting ? "disabled" : ""}
          style={{ display: `${isActive ? "inline-block" : "none"}` }}
        >
          Comment
        </button>
        <button
          type="reset"
          onClick={handleReset}
          style={{ display: `${isActive ? "inline-block" : "none"}` }}
        >
          Cancel
        </button>
      </div>
      {isError ? (
        <p className="comment-error">Sorry, your comment could not be posted</p>
      ) : null}
    </form>
  );
};

export default CommentForm;
