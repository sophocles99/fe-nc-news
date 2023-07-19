const CommentCard = ({ comment: { author, created_at, body, votes } }) => {
  const date = new Date(created_at);

  return (
    <section className="comment-card">
      <p>
        Posted by <span className="author">{author}</span> on{" "}
        {date.toLocaleString("en-GB", { dateStyle: "medium" })}
      </p>
      <p className="comment-body">{body}</p>
      <p>Votes <span className="votes">{votes}</span></p>
    </section>
  );
};

export default CommentCard;
