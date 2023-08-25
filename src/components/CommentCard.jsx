import { useState } from "react";
import { deleteComment } from "../api";

import CommentDeleteButton from "./CommentDeleteButton";
import ago from "../utils/ago";

const CommentCard = ({
  comment: { comment_id, author, created_at, body, votes },
  setComments,
  setCommentCount,
  username,
}) => {
  const date = new Date(created_at);
  const agoString = ago(date);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDelete = (commentId) => {
    setIsDeleting(true);
    deleteComment(commentId)
      .then(() => {
        setComments((currentComments) =>
          currentComments.filter((comment) => comment.comment_id !== commentId)
        );
        setCommentCount(
          (currentCommentCount) => Number(currentCommentCount) - 1
        );
        setIsDeleting(false);
        setIsError(false);
      })
      .catch(() => {
        setIsDeleting(false);
        setIsError(true);
      });
  };

  return (
    <section className="comment-card">
      <p>
        <span className="author">{author}</span> {agoString}
      </p>
      <p className="comment-card-body">{body}</p>
      <div className="comment-card-footer">
        <div className="comment-card-votes">
          Votes <span className="votes">{votes}</span>
        </div>
        {author === username ? (
          <CommentDeleteButton
            comment_id={comment_id}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
            isError={isError}
          />
        ) : null}
      </div>
    </section>
  );
};

export default CommentCard;
