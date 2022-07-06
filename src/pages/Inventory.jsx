import DateFilter from "../components/DateFilter";
import moment from "moment";


// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);

const Inventory = () => {
  return (
    <div className="inventory grow">
      {/* Contents */}
      <div className="grow m-3 rounded bg-[#04ac49]/10 ">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Inventory</h4>
            <span className="text-sm text-gray">
              {date.format("DD MMMM YYYY")}
            </span>
          </div>
          {/* Filter Date */}
          <div className="filter-date text-right p-1 pr-4">
            <div className="pr-36 text-xs font-semibold pb-2">
              <span className="">Filter Tanggal</span>
            </div>
            <div className="filter">
              <DateFilter />
            </div>
          </div>
        </div>

        {/* Widget 1 */}
        {/* <div className="widget-3 m-8 ">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            KPI PERFORMANCE DARI STOCK
          </span>
          <div className="grafik">
            <BarTrendVisitor />
          </div>
        </div> */}

        {/* Widget 2 */}
        {/* <div className="widget-4 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            SUPPLY CHAIN OVERVIEW
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <BarTrendVisitor />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 mr-5 pb-8 pt-4 text-gray-700">
            SUPPLIER QUANTITY
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <BarTrendVisitor />
            </div>
          </span>
        </div> */}

      </div>
    </div>
  )
}

export default Inventory