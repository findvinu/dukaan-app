import { useState } from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";
import { Links } from "./SidebarLinksData";

import "./Sidebar.scss";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (text) => {
    setActiveLink(text);
  };

  return (
    <aside className="sidebar">
      <div>
        <SidebarHeader />
        <ul>
          {Links.map((link) => {
            return (
              <SidebarLink
                key={link.text}
                icon={link.icon}
                text={link.text}
                isActive={activeLink === link.text}
                onClick={() => handleLinkClick(link.text)}
              />
            );
          })}
        </ul>
      </div>
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
