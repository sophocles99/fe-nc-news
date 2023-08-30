import { useState } from "react";

const SettingsMenu = ({ isMenuOpen, sortBy, setSortBy, order, setOrder }) => {
  const sortByOptions = [
    { value: "created_at", text: "Date" },
    { value: "comment_count", text: "Number of Comments" },
    { value: "votes", text: "Number of Votes" },
  ];

  const [selectedSortBy, setSelectedSortBy] = useState(sortBy);
  const [selectedOrder, setSelectedOrder] = useState(order);

  const handleSortByChange = (e) => {
    const newSortBy = e.target.value;
    setSelectedSortBy(newSortBy);
    setSortBy(newSortBy);
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setSelectedOrder(newOrder);
    setOrder(newOrder);
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
      <p className="menu-heading">Order</p>
      <label
        className={`menu-option ${selectedOrder === "asc" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="order"
          value="asc"
          checked={selectedOrder === "asc"}
          onChange={handleOrderChange}
        />
        {selectedSortBy === "created_at" ? "Oldest First" : "Fewest First"}
      </label>
      <label
        className={`menu-option ${selectedOrder === "desc" ? "selected" : ""}`}
      >
        <input
          type="radio"
          name="order"
          value="desc"
          checked={selectedOrder === "desc"}
          onChange={handleOrderChange}
        />
        {selectedSortBy === "created_at" ? "Newest First" : "Most First"}
      </label>
    </form>
  );
};

export default SettingsMenu;
