const ArticleCard = ({
  article: {
    title,
    author,
    created_at,
    article_img_url,
    votes,
    comment_count,
    body,
  },
  withBody,
}) => {
  const date = new Date(created_at);

  return (
    <section className="article-card">
      <h3>{title}</h3>
      <p>
        Posted by <span className="author">{author}</span> on{" "}
        {date.toLocaleString("en-GB", { dateStyle: "medium" })}
      </p>
      <img src={article_img_url} />
      {withBody ? <p className="article-body">{body}</p> : null}
      <div className="stats">
        <p>
          Comments <span className="comment-count">{comment_count}</span>
        </p>
        <p>
          Votes <span className="votes">{votes}</span>
        </p>
      </div>
    </section>
  );
};

export default ArticleCard;
