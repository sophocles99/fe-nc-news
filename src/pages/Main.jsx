import ArticlesList from "../components/ArticlesList";
import TopicSelector from "../components/TopicSelector";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Main = () => {
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="main-page">
      <section className="filters">
        <TopicSelector topic={topic} />
      </section>
      <h2 className="articles-header">
        Viewing {topic ? `articles on ${topic}` : "all articles"}
      </h2>
      <ArticlesList topic={topic} sortBy={sortBy} />
    </div>
  );
};

export default Main;
