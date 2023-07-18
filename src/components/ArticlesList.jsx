import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic)
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) {
    return <p className="loading">Loading data...</p>;
  }

  return (
    <ul className="articles-list">
      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>
          <li>
            <ArticleCard article={article} withBody={false} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ArticlesList;
