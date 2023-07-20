import { getTopics } from "../api";
import { useEffect, useState } from "react";
import titleCase from "../utils/title-case";
import { useNavigate } from "react-router-dom";

const TopicSelector = ({ topic }) => {
  if (!topic) topic = "All Topics";
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then(({ topics }) => setTopics(topics));
  }, []);

  const redirect = (topic) => {
    if (topic === "All Topics") {
      navigate("/");
    } else {
      navigate(`/topics/${topic}`);
    }
  };

  return (
    <select
      className="topic-selector"
      onChange={(e) => redirect(e.target.value)}
      value={topic}
    >
      <option value={"All Topics"}>All Topics</option>
      {topics.map(({ slug }) => {
        return (
          <option value={slug} key={slug}>
            {titleCase(slug)}
          </option>
        );
      })}
    </select>
  );
};

export default TopicSelector;
