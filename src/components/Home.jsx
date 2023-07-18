import ArticlesList from "./ArticlesList";
import FilterBar from "./FilterBar";
import { useState } from "react";

const Home = () => {
  const [topic, setTopic] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  return (
    <main>
      <FilterBar setTopic={setTopic} setSortBy={setSortBy} />
      <h2 className="articles-header">
        Viewing {topic ? `articles on ${topic}` : "all articles"}
      </h2>
      <ArticlesList topic={topic} sortBy={sortBy} />
    </main>
  );
};

export default Home;
