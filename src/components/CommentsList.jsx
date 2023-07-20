import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const username = "tickle122"; // TODO - useContext to store logged in username

const CommentsList = ({ article_id, setCommentCount }) => {
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
      {comments.length ? null : <p>No comments yet...</p>}
      <CommentForm
        article_id={article_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
        username={username}
      />
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <CommentCard
            comment={comment}
            setComments={setComments}
            setCommentCount={setCommentCount}
            username={username}
          />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
