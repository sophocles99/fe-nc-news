import ago from "../utils/ago";

const ArticleCard = ({
  article: { article_img_url, title, topic, created_at, comment_count, votes },
}) => {
  const date = new Date(created_at);
  const agoString = ago(date);

  return (
    <section className="article-card">
      <div className="header">
        <p className="topic">{topic}</p>
        <p className="ago-string">{agoString}</p>
      </div>
      <img src={article_img_url} />
      <p className="title">{title}</p>
      <div className="footer">
        <p className="comments">{`Comments ${comment_count}`}</p>
        <p className="votes">{`Votes ${votes}`}</p>
      </div>
    </section>
  );
};

export default ArticleCard;
