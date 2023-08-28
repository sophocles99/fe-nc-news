const SortMenu = ({ isMenuOpen }) => {
  return (
    <form className={`settings-menu ${isMenuOpen ? "visible" : ""}`}>
      <p className="menu-heading">Sort By</p>
      <label>
        <input
          type="radio"
          name="sort-by"
          value="created_at"
          checked={true}
          className="form-check-input"
        />
        Date
      </label>
      <label>
        <input
          type="radio"
          name="sort-by"
          value="comment_count"
          checked={false}
          className="form-check-input"
        />
        Comments
      </label>
      <label>
        <input
          type="radio"
          name="sort-by"
          value="votes"
          checked={false}
          className="form-check-input"
        />
        Votes
      </label>
    </form>
  );
};

export default SortMenu;
