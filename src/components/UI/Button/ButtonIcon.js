import classes from "./ButtonIcon.module.scss";

const ButtonIcon = ({
  icon,
  type,
  btnStyle = "",
  btnTitle,
  btnBg,
  className,
}) => {
  const getButtonClass = () => {
    switch (type) {
      case "icon-button":
        return `${classes.iconButton} ${
          btnStyle === "round" ? classes.round : classes.square
        } ${className} ${btnBg ? classes.btnBG : ""}`;
      case "text-icon-button":
        return `${classes.iconTextButton} ${
          btnStyle === "round" ? classes.round : classes.square
        }`;
      default:
        return classes.button;
    }
  };

  return (
    <button className={getButtonClass()}>
      {type === "icon-button" ? (
        icon
      ) : type === "text-icon-button" ? (
        <div className="text-icon">
          <>
            {btnTitle}
            {icon}
          </>
        </div>
      ) : (
        <p className="button">Button</p>
      )}
    </button>
  );
};

export default ButtonIcon;
