import { useState } from "react";

const SettingsMenu = ({ isMenuOpen, sortBy, setSortBy }) => {
  const sortByOptions = [
    { value: "created_at", text: "Date" },
    { value: "comment_count", text: "Number of Comments" },
    { value: "votes", text: "Number of Votes" },
  ];

  const [selectedSortBy, setSelectedSortBy] = useState(sortBy);

  const handleSortByChange = (e) => {
    setSelectedSortBy(e.target.value);
    setSortBy(e.target.value);
  };

  return (
    <form className={`settings-menu ${isMenuOpen ? "visible" : ""}`}>
      <p className="menu-heading">Sort By</p>
      {sortByOptions.map((sortByOption) => {
        return (
          <label
            className={`menu-option ${
              selectedSortBy === sortByOption.value ? "selected" : ""
            }`}
            key={sortByOption.value}
          >
            <input
              type="radio"
              name="sort-by"
              value={sortByOption.value}
              checked={selectedSortBy === sortByOption.value}
              onChange={handleSortByChange}
            />
            {sortByOption.text}
          </label>
        );
      })}
    </form>
  );
};

export default SettingsMenu;
