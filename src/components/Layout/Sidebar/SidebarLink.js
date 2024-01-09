const SidebarLink = ({ icon, text, isActive, onClick }) => {
  return (
    <li
      className={`sidebar-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </li>
  );
};

export default SidebarLink;
