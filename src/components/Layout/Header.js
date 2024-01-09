import HowIcon from "../../assets/images/how.png";
import AnnouncementIcon from "../../assets/svg-icons/announcement-icon";
import DropIcon from "../../assets/svg-icons/drop-icon";
import ButtonIcon from "../UI/Button/ButtonIcon";
import Search from "../UI/SearchInput/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="paymentWrapper">
        <span className="paymentText">Payments</span>
        <div className="howItWorks">
          <img src={HowIcon} alt="how it works" title="how it works" />
          <span>How it works</span>
        </div>
      </div>
      <Search
        placeholderText="Search features, tutorials, etc."
        className="headerSearch"
      />
      <div className="iconBtnWrapper">
        <ButtonIcon
          type="icon-button"
          btnBg
          btnStyle="round"
          icon={<AnnouncementIcon />}
        />
        <ButtonIcon
          type="icon-button"
          btnBg
          btnStyle="round"
          icon={<DropIcon />}
          className="button"
        />
      </div>
    </div>
  );
};

export default Header;
