import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

const SortSelector = ({ sortBy, setSortBy, order, setOrder }) => {
  const sortByOptions = [
    { value: "created_at", text: "Sort By Date" },
    { value: "comment_count", text: "Sort By Comments" },
    { value: "votes", text: "Sort By Votes" },
  ];

  return (
    <div className="sort-selector">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-selector-select"
      >
        {sortByOptions.map((sortByOption) => {
          return (
            <option value={sortByOption.value} key={sortByOption.value}>
              {sortByOption.text}
            </option>
          );
        })}
      </select>
      <button
        className={`sort-order-button ascending ${
          order === "asc" ? "selected" : ""
        }`}
        onClick={() => setOrder("asc")}
      >
        {FaSortAmountUp()}
      </button>
      <button
        className={`sort-order-button descending ${
          order === "desc" ? "selected" : ""
        }`}
        onClick={() => setOrder("desc")}
      >
        {FaSortAmountDown()}
      </button>
    </div>
  );
};

export default SortSelector;
