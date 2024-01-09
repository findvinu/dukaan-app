import Layout from "./Layout/Layout";
import ContentArea from "./Layout/ContentArea";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header";
import Select from "./UI/SelectDropDown/Select";
import Card from "./UI/Card/Card";
import Search from "./UI/SearchInput/Search";
import ButtonIcon from "./UI/Button/ButtonIcon";
import DownloadIcon from "../assets/svg-icons/download-icon";
import SortIcon from "../assets/svg-icons/sort-icon";
import Table from "./UI/TableComponent/Table";
import Pagination from "./UI/Pagination/Pagination";

function App() {
  return (
    <Layout>
      <Sidebar />
      <ContentArea>
        <Header />
        <section className="contentAreaInner">
          <article className="overviewWrapper">
            <header className="headingWrapper">
              <h2 className="heading">Overview</h2>
              <Select />
            </header>
            <div className="cardWrapper">
              <Card text="Online orders" number="231" />
              <Card text="Amount received" number="₹23,92,312.19" />
            </div>
          </article>
          <article className="tableWrapper">
            <header className="headingWrapper">
              <h2 className="heading">Transactions | This Month</h2>
            </header>
            <div className="tableInnerWrapper">
              <div className="tableSearchWrapper">
                <Search
                  className="tableSearch"
                  placeholderText="Search by order ID..."
                />
                <div className="buttonWrapper">
                  <ButtonIcon
                    width="79px"
                    height="36px"
                    icon={<SortIcon />}
                    btnStyle="square"
                    type="text-icon-button"
                    btnTitle="Sort"
                  />
                  <ButtonIcon
                    icon={<DownloadIcon />}
                    btnStyle="square"
                    type="icon-button"
                  />
                </div>
              </div>
              <Table />
              <Pagination />
            </div>
          </article>
        </section>
      </ContentArea>
    </Layout>
  );
}

export default App;
