const ArticleCard = ({
  article: { title, author, created_at, article_img_url, votes, comment_count },
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
      <div className="stats">
        <p>Votes {votes}</p>
        <p>Comments {comment_count}</p>
      </div>
    </section>
  );
};

export default ArticleCard;
