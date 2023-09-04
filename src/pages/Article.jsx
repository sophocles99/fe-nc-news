import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Nav from "../components/Nav";
import LoadingCard from "../components/LoadingCard";
import CommentsList from "../components/CommentsList";
import FullArticle from "../components/FullArticle";
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
    return (
      <>
        <Nav />
        <LoadingCard />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav page="article" />
        {error.response.status === 404 ? (
          <ErrorCard message={"Sorry, that article cannot be found"} />
        ) : (
          <ErrorCard message={"Sorry, unable to fetch that article"} />
        )}
      </>
    );
  }

  return (
    <>
      <Nav page="article" />
      <section className="full-article-container">
        <FullArticle article={article} commentCount={commentCount} />
        <CommentsList
          article_id={article_id}
          setCommentCount={setCommentCount}
        />
      </section>
    </>
  );
};

export default Article;
