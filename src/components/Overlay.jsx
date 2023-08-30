const Overlay = ({ isOpen, onClick }) => {
  return (
    <div
      className={`overlay ${isOpen ? "visible" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
