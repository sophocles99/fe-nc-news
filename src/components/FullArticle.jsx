import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getUserByUsername, patchArticleVote } from "../api";
import { useEffect, useState } from "react";

const FullArticle = ({ article, commentCount }) => {
  const { article_id, title, author, created_at, article_img_url, body } =
    article;
  const date = new Date(created_at);
  const [fullAuthor, setFullAuthor] = useState({});
  const [votes, setVotes] = useState(article.votes);
  const [isVoteError, setIsVoteError] = useState(false);

  useEffect(() => {
    getUserByUsername(author).then(({ user }) => {
      setFullAuthor(user);
    });
  }, []);

  const updateVote = (incVotes) => {
    setVotes((currentVotes) => currentVotes + incVotes);
    patchArticleVote(article_id, incVotes)
      .then(() => setIsVoteError(false))
      .catch(() => {
        setVotes((currentVotes) => currentVotes - incVotes);
        setIsVoteError(true);
      });
  };

  return (
    <section className="article-card full-article">
      <img src={article_img_url} />
      <p className="title">{title}</p>
      <div className="written-by">
        <img src={fullAuthor.avatar_url} className="author-avatar" />
        <p>
          <span className="author">{fullAuthor.name}</span> on{" "}
          {date.toLocaleString("en-GB", { dateStyle: "medium" })}
        </p>
      </div>
      <p className="body">{body}</p>
      <div className="footer">
        <p className="comments">{`Comments ${commentCount}`}</p>
        <p>
          <button
            className="vote-button vote-button-down"
            onClick={() => updateVote(-1)}
          >
            {FaArrowDown()}
          </button>
          <button
            className="vote-button vote-button-up"
            onClick={() => updateVote(1)}
          >
            {FaArrowUp()}
          </button>
          Votes <span className="votes">{votes}</span>
        </p>
        {isVoteError ? (
          <p className="vote-error">Sorry, votes could not be updated</p>
        ) : null}
      </div>
    </section>
  );
};

export default FullArticle;
