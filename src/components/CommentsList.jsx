import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading data...</p>;
  }

  return (
    <ul className="comments-list">
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <CommentCard comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
