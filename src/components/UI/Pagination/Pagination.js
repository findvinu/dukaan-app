import LeftArrow from "../../../assets/images/arrowAngle.png";
import classes from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <button>
        <img src={LeftArrow} alt="arrow" />
        Previous
      </button>
      <span>1</span>
      <span>...</span>
      <span className={classes.active}>10</span>
      <span>11</span>
      <span>12</span>
      <span>13</span>
      <span>14</span>
      <span>15</span>
      <span>16</span>
      <span>17</span>
      <span>18</span>
      <button>
        Next <img src={LeftArrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
