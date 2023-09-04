import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import LoadingCard from "./LoadingCard";

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
  }, [topic, sortBy, order]);

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <ul className="articles-list">
      {articles.map((article) => (
        <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
