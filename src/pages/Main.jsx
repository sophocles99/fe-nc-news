import ArticlesList from "../components/ArticlesList";
import ErrorCard from "../components/ErrorCard";
import SortSelector from "../components/SortSelector";
import TopicSelector from "../components/TopicSelector";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopics } from "../api";

const Main = () => {
  const { topic } = useParams();
  const [topics, setTopics] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getTopics().then(({ topics }) => setTopics(topics));
  }, [topic]);

  if (topic && !topics.map(({ slug }) => slug).includes(topic)) {
    return <ErrorCard message={`Sorry, topic "${topic}" does not exist`} />;
  }

  return (
    <div className="main-page">
      <section className="filters">
        <TopicSelector topics={topics} topic={topic} />
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
