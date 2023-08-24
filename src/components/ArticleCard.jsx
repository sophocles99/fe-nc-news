import ago from "../utils/ago";

const ArticleCard = ({
  article: { article_img_url, title, topic, created_at, comment_count, votes },
}) => {
  const date = new Date(created_at);
  const agoString = ago(date);

  return (
    <section className="article-card">
      <img src={article_img_url} />
      <p className="title">{title}</p>
      <p className="topic">{topic}</p>
      <p className="ago-string">{agoString}</p>
      <p className="comments">{`Comments ${comment_count}`}</p>
      <p className="votes">{`Votes ${votes}`}</p>
    </section>
  );
};

export default ArticleCard;
