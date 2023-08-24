import titleCase from "../utils/title-case";

const TopicMenu = ({ topics, topic }) => {
  if (!topic) topic = "All Topics";
  const [selectedTopic, setSelectedTopic] = useState(topic);

  const navigate = useNavigate();
  const redirect = (topic) => {
    if (topic === "All Topics") {
      navigate("/");
    } else {
      navigate(`/topics/${topic}`);
    }
  };

  return (
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
  );
};

export default TopicMenu;

import { getTopics } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopicSelector = ({ topics, topic }) => {
  if (!topic) topic = "All Topics";

  const navigate = useNavigate();
  const redirect = (topic) => {
    if (topic === "All Topics") {
      navigate("/");
    } else {
      navigate(`/topics/${topic}`);
    }
  };

  return (
    <div className="topic-selector">
      <select
        className="topic-selector-select"
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
    </div>
  );
};
