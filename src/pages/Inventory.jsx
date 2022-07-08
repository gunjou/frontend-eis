import DateFilter from "../components/DateFilter";
import moment from "moment";
import StockCard from "components/diagram/inventory/StockCard";
import TrendStock from "components/diagram/inventory/TrendStock";
import ItemsDetail from "components/diagram/inventory/ItemsDetail";
import DetailStock from "components/diagram/inventory/DetailStock";
import { useState } from "react";
import ItemsPredict from "components/diagram/inventory/ItemsPredict";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);

const Inventory = () => {
  const [isDiagram, setIsDiagram] = useState(false);
  return (
    <div className="inventory grow">
      <DetailStock />

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
        <div className="widget-2 flex flex-row">
          <StockCard type="optimal" />
          <StockCard type="overstock" />
          <StockCard type="understock" />
        </div>

        {/* Widget 2 */}
        <div className="widget-2 ml-8 mt-5 text-left">
          <span className="font-bold text-left basis-full mr-5 pb-8 pt-4 text-gray-700">
            TREND STOCK VALUE
            <div className="p-3">
              <TrendStock />
            </div>
          </span>
        </div>

        {/* Widget 3 */}
        <div className="widget-3 ml-8 pb-8 mr-8 mt-5 text-left">
          <span className="font-bold pt-4 text-gray-700">
            DETAIL ITEMS
            {!isDiagram ? (
              <>
                <div className="category grid grid-cols-8 pt-5 text-xs pb-3">
                  <button className="mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                    Current Data
                  </button>
                  <button
                    onClick={() => setIsDiagram(!isDiagram)}
                    className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded"
                  >
                    Diagram Predict
                  </button>
                </div>
                <div className="p-3 rounded border-white bg-white drop-shadow-xl">
                  <ItemsDetail />
                </div>
              </>
            ) : (
              <>
                <div className="category grid grid-cols-8 pt-5 text-xs pb-3">
                  <button
                    onClick={() => setIsDiagram(!isDiagram)}
                    className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded"
                  >
                    Current Data
                  </button>
                  <button className="mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                    Diagram Predict
                  </button>
                </div>
                <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <div className="item p-5 cursor-pointer">
              OMEPRAZOLE 40 MG INJ - OGB DEXA (E-CAT) 
              <ArrowDropDownIcon />
              </div>
                  <ItemsPredict />
                </div>
              </>
            )}
          </span>
        </div>

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
  );
};

export default Inventory;
