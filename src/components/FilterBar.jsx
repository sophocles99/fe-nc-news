import { getTopics } from "../api";
import { useEffect, useState } from "react";
import titleCase from "../utils/title-case";

const FilterBar = ({ setTopic, setSortBy }) => {
  const [topics, setTopics] = useState([]);
  // const validSortBy = [{ Date: "created_at" }];

  useEffect(() => {
    getTopics().then(({ topics }) => setTopics(topics));
  }, []);

  return (
    <section className="filter-bar">
      <select
        className="select-topic"
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value={null}>All Topics</option>
        {topics.map(({ slug }) => {
          return (
            <option value={slug} key={slug}>
              {titleCase(slug)}
            </option>
          );
        })}
      </select>
      <select
        className="select-sortby"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value={null}>Sort By</option>
      </select>
    </section>
  );
};

export default FilterBar;
