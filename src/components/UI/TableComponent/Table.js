import { useEffect, useState } from "react";
import axios from "axios";
// import tableData from "../../../api/table_data.json";
import classes from "./Table.module.scss";
import DropIcon from "../../../assets/svg-icons/drop-icon";
import Info from "../../../assets/images/info.png";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await axios.get(
          "https://findvinu.github.io/dukaan-app/api/table_data.json"
        );
        setTableData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getDataFromApi();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className={classes.tableWrapperBlock}>
      <table>
        <thead>
          <tr>
            <th className={classes.orderIdHead}>Order ID</th>
            <th className={classes.orderDateHead}>
              Order date <DropIcon width="7px" height="5px" />
            </th>
            <th className={classes.orderAmountHead}>Order amount</th>
            <th className={classes.orderFeesHead}>
              Transaction fees{" "}
              <img src={Info} alt="info" title="Transaction fees" />{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((tableItem) => {
            return (
              <tr key={tableItem.orderId}>
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
