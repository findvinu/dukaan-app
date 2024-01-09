const SidebarLink = ({ icon, text }) => {
    return (
      <li className="sidebar-link">
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
      </li>
    );
  };
  
  export default SidebarLink;