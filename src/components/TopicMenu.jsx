import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import titleCase from "../utils/title-case";

const TopicMenu = ({ topics, topic }) => {
  if (!topic) topic = "All Topics";
  const [selectedTopic, setSelectedTopic] = useState(topic);

  useEffect(() => {
    setSelectedTopic(topic);
  }, [topic]);

  const navigate = useNavigate();
  const redirect = (topic) => {
    if (topic === "All Topics") {
      navigate("/");
    } else {
      navigate(`/topics/${topic}`);
    }
  };

  return (
    <div className="topic-menu-container">
      <section className="topic-menu">
        {topics.map(({ slug }) => (
          <button
            className={`topic-button ${
              selectedTopic === slug ? "topic-selected" : ""
            }`}
            key={slug}
            onClick={() => {
              setSelectedTopic(slug);
              redirect(slug);
            }}
          >
            {titleCase(slug)}
          </button>
        ))}
      </section>
    </div>
  );
};

export default TopicMenu;
