import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";
import HomeIcon from '../../../assets/svg-icons/home-icon';
import OrderIcon from "../../../assets/svg-icons/order-icon";
import ProductIcon from "../../../assets/svg-icons/product-icon";
import DeliveryIcon from "../../../assets/svg-icons/delivery-icon";
import MarketingIcon from "../../../assets/svg-icons/marketing-icon";
import AnalyticsIcon from "../../../assets/svg-icons/analytics-icon";
import PaymentsIcon from "../../../assets/svg-icons/payment-icon";
import ToolsIcon from "../../../assets/svg-icons/tools-icon";
import DiscountsIcon from "../../../assets/svg-icons/discounts-icon";
import AudienceIcon from "../../../assets/svg-icons/audience-icon";
import AppearanceIcon from "../../../assets/svg-icons/appearance-icon";
import PluginsIcon from "../../../assets/svg-icons/plugins-icon";

import "./Sidebar.scss";

const links = [
  { icon: <HomeIcon />, text: "Home" },
  { icon: <OrderIcon />, text: "Orders" },
  { icon: <ProductIcon />, text: "Products" },
  { icon: <DeliveryIcon />, text: "Delivery" },
  { icon: <MarketingIcon />, text: "Marketing" },
  { icon: <AnalyticsIcon />, text: "Analytics" },
  { icon: <PaymentsIcon />, text: "Payments" },
  { icon: <ToolsIcon />, text: "Tools" },
  { icon: <DiscountsIcon />, text: "Discounts" },
  { icon: <AudienceIcon />, text: "Audience" },
  { icon: <AppearanceIcon />, text: "Appearance" },
  { icon: <PluginsIcon />, text: "Plugins" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div>
      <SidebarHeader />
      <ul>
        {links.map((link) => {
          return (
            <SidebarLink key={link.text} icon={link.icon} text={link.text} />
          );
        })}
      </ul>
      </div>
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
