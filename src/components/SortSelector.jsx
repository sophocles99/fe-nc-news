import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

const SortSelector = ({ sortBy, setSortBy, order, setOrder }) => {
  const sortByOptions = [
    { value: "", text: "Sort By" },
    { value: "created_at", text: "Date" },
    { value: "comment_count", text: "Comments" },
    { value: "votes", text: "Votes" },
  ];
  if (!sortBy) sortBy = "";

  const changeSortBy = (newSortBy) => {
    if (newSortBy === "") newSortBy = null;
    setSortBy(newSortBy);
  };

  return (
    <div className="sort-selector">
      <select
        value={sortBy}
        onChange={(e) => changeSortBy(e.target.value)}
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
        className="sort-order-button ascending"
        onClick={() => setOrder("asc")}
      >
        {FaSortAmountUp()}
      </button>
      <button
        className="sort-order-button descending"
        onClick={() => setOrder("desc")}
      >
        {FaSortAmountDown()}
      </button>
    </div>
  );
};

export default SortSelector;
