import Nav from "../components/Nav";
import ArticlesList from "../components/ArticlesList";
import ErrorCard from "../components/ErrorCard";
import TopicMenu from "../components/TopicMenu";
import SortSelector from "../components/SortSelector";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopics } from "../api";

const Home = () => {
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
    <>
      <Nav page="home" />
      <TopicMenu topics={topics} topic={topic} className="topic-menu" />
      {/* <section className="filters">
        <SortSelector
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
      </section> */}
      <ArticlesList topic={topic} sortBy={sortBy} order={order} />
    </>
  );
};

export default Home;
