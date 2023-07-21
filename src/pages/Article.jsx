import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentsList from "../components/CommentsList";
import FullArticleCard from "../components/FullArticleCard";
import ErrorCard from "../components/ErrorCard";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [commentCount, setCommentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setCommentCount(article.comment_count);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading data...</p>;
  }

  if (error) {
    if (error.response.status === 404) {
      return (
        <ErrorCard message={`Sorry, article ${article_id} does not exist`} />
      );
    } else {
      return <ErrorCard message={`Sorry, unable to fetch article ${article_id}`} />
    }
  }

  return (
    <div className="article-page">
      <div className="articles-list">
        <FullArticleCard article={article} commentCount={commentCount} />
      </div>
      <CommentsList article_id={article_id} setCommentCount={setCommentCount} />
    </div>
  );
};

export default Article;
