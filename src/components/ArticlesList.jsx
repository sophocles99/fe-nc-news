import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ topic, sortBy, order }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic, sortBy, order)
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
            <ArticleCard article={article} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ArticlesList;
