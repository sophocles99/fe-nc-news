import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <ul className="articles-list">
      {articles.map((article) => (
        <li key={article.article_id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
