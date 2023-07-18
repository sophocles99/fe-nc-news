import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleCard from "./ArticleCard";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
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
    <main>
      <div className="single-article">
        <ArticleCard article={article} withBody={true} />
      </div>
    </main>
  );
};

export default Article;
