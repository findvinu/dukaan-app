import { tableData } from "./tableData";
import classes from './Table.module.scss';
import DropIcon from "../../../assets/svg-icons/drop-icon";
import Info from  '../../../assets/images/info.png';

const Table = () => {
  return (
    <div className={classes.tableWrapperBlock}>
      <table>
        <thead>
          <th className={classes.orderIdHead}>Order ID</th>
          <th className={classes.orderDateHead}>
            Order date <DropIcon width="7px" height="5px" />
          </th>
          <th className={classes.orderAmountHead}>Order amount</th>
          <th className={classes.orderFeesHead}>
            Transaction fees{" "}
            <img src={Info} alt="info" title="Transaction fees" />{" "}
          </th>
        </thead>
        <tbody>
          {tableData.map((tableItem) => {
            return (
              <tr>
                <td className={classes.orderId}>{tableItem.orderId}</td>
                <td className={classes.orderDate}>{tableItem.orderDate}</td>
                <td className={classes.orderAmount}>{tableItem.orderAmount}</td>
                <td className={classes.orderFees}>{tableItem.fees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
