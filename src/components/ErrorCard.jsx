import { Link } from "react-router-dom";

const ErrorCard = ({ message }) => {
  return (
    <section className="error-card">
      <p>{message}</p>
      <Link to="/">
        <button>Return to Articles</button>
      </Link>
    </section>
  );
};

export default ErrorCard;
