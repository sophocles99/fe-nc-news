import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleCard from "../components/ArticleCard";
import CommentsList from "../components/CommentsList";

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
    <div className="article-page">
      <div className="articles-list">
        <ArticleCard article={article} withBody={true} />
      </div>
      <CommentsList article_id={article_id}/>
    </div>
  );
};

export default Article;
