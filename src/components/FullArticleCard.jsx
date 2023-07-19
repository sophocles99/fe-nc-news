import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { patchArticleVote } from "../api";
import { useState } from "react";

const FullArticleCard = ({ article, commentCount }) => {
  const {
    article_id,
    title,
    author,
    created_at,
    article_img_url,
    body,
  } = article;
  const date = new Date(created_at);
  const [votes, setVotes] = useState(article.votes);
  const [isVoteError, setIsVoteError] = useState(false);

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
    <section className="article-card">
      <h3>{title}</h3>
      <p>
        Posted by <span className="author">{author}</span> on{" "}
        {date.toLocaleString("en-GB", { dateStyle: "medium" })}
      </p>
      <img src={article_img_url} />
      <p className="article-body">{body}</p>
      <div className="stats">
        <p>
          Comments <span className="comment-count">{commentCount}</span>
        </p>
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
      </div>
      {isVoteError ? (
        <p className="vote-error">Sorry, votes could not be updated</p>
      ) : null}
    </section>
  );
};

export default FullArticleCard;
