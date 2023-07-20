import ArticlesList from "../components/ArticlesList";
import SortSelector from "../components/SortSelector";
import TopicSelector from "../components/TopicSelector";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Main = () => {
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <div className="main-page">
      <section className="filters">
        <TopicSelector topic={topic} />
        <SortSelector
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
      </section>
      <h2 className="articles-header">
        Viewing {topic ? `articles on ${topic}` : "all articles"}
      </h2>
      <ArticlesList topic={topic} sortBy={sortBy} order={order} />
    </div>
  );
};

export default Main;
