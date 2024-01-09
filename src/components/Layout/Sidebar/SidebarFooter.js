import CreditIcon from "../../../assets/svg-icons/credit-icon";

const SidebarFooter = () => {
  return (
    <div className="sidebarFooter">
      <div className="footerIcon">
        <CreditIcon />
      </div>
      <div className="footerText">
        <div className="availableCredit">Available credits</div>
        <div className="availableAmount">222.10</div>
      </div>
    </div>
  );
};

export default SidebarFooter;
