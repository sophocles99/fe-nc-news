import ArticlesList from "../components/ArticlesList";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

const Main = () => {
  const [topic, setTopic] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="main-page">
      <FilterBar setTopic={setTopic} setSortBy={setSortBy} />
      <h2 className="articles-header">
        Viewing {topic ? `articles on ${topic}` : "all articles"}
      </h2>
      <ArticlesList topic={topic} sortBy={sortBy} />
    </div>
  );
};

export default Main;
