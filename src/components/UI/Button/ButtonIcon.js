import classes from "./ButtonIcon.module.scss";

const ButtonIcon = ({ icon, type, btnStyle="", btnTitle, btnBg, className, height, width }) => {
  return (
    <button
      className={
        type === "icon-button"
          ? `${classes.iconButton} ${`${btnStyle === "round" ? classes.round : classes.square}`} ${className} ${btnBg ? classes.btnBG : ''}`
          : type === "text-icon-button"
          ? `${classes.iconTextButton} ${`${btnStyle === "round" ? classes.round : classes.square}`}`
          : `${classes.button}`
      }
    >
      {type === "icon-button" ? (
        icon
      ) : type === "text-icon-button" ? (
        <div className="text-icon"><>{btnTitle}{icon}</></div>
      ) : (
        <button className="button">Button</button>
      )}
    </button>
  );
};

export default ButtonIcon;
