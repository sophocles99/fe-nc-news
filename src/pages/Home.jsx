import Nav from "../components/Nav";
import TopicMenu from "../components/TopicMenu";
import ArticleList from "../components/ArticleList";
import ErrorCard from "../components/ErrorCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopics } from "../api";

const Home = () => {
  const { topic } = useParams();
  const [topics, setTopics] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getTopics().then(({ topics }) =>
      setTopics([{ slug: "All Topics" }, ...topics])
    );
  }, [topic]);

  if (topic && !topics.map(({ slug }) => slug).includes(topic)) {
    return <ErrorCard message={`Sorry, topic "${topic}" does not exist`} />;
  }

  return (
    <>
      <Nav page="home" setSortBy={setSortBy} setOrder={setOrder} />
      <TopicMenu className="topic-menu" topics={topics} topic={topic} />
      <ArticleList topic={topic} sortBy={sortBy} order={order} />
    </>
  );
};

export default Home;
