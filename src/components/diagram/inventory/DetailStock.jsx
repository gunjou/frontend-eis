// @ts-nocheck
import React, { useState } from "react";
import { dataStatusStock } from "components/datatable/inventory/dataStatusStock";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
import { BarChart, Bar } from "recharts";

const DataFormater = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

const LineDiagramStock = ({ param }) => {
  let data;
  switch (param) {
    case "overstock":
      data = { title: "Overstock", diagram: "over", fill: "#F78983" };
      break;
    case "optimal":
      data = { title: "Optimal", diagram: "optimal", fill: "#7AAB6C" };
      break;
    case "understock":
      data = { title: "Understock", diagram: "under", fill: "#49ABA6" };
      break;
    default:
      break;
  }
  return (
    <div className="diagram-detail">
      <ResponsiveContainer width="99%" height={500}>
        <AreaChart
          width={500}
          height={300}
          data={dataStatusStock}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip
            formatter={(value) =>
              "Rp" + new Intl.NumberFormat("id").format(value) + ",00"
            }
          />
          <Area
            type="monotone"
            name={data.title}
            dataKey={data.diagram}
            stroke={data.fill}
            fill={data.fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const BarDiagramStock = ({ param }) => {
  let data;
  switch (param) {
    case "overstock":
      data = { title: "Overstock", diagram: "over", fill: "#F78983" };
      break;
    case "optimal":
      data = { title: "Optimal", diagram: "optimal", fill: "#7AAB6C" };
      break;
    case "understock":
      data = { title: "Understock", diagram: "under", fill: "#49ABA6" };
      break;
    default:
      break;
  }
  return (
    <div className="diagram-detail">
      <ResponsiveContainer width="99%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={dataStatusStock}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip
            formatter={(value) =>
              "Rp" + new Intl.NumberFormat("id").format(value) + ",00"
            }
          />
          <Bar name={data.title} dataKey={data.diagram} fill={data.fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const DetailStock = () => {
  const [isBar, setIsBar] = useState(false);
  const data = [
    { id: "overstock", title: "Overstock" },
    { id: "optimal", title: "Optimal" },
    { id: "understock", title: "Understock" },
  ];

  return (
    <div className="detail-stock">
      {data.map((data) => (
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/50"
          id={data.id}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative pointer-events-none w-full max-w-7xl h-full">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Trend {data.title}
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {!isBar ? (
                <>
                  <div className="category grid grid-cols-8 pl-8 pt-5 text-xs pb-3">
                    <button className="mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                      Line Diagram
                    </button>
                    <button
                      onClick={() => setIsBar(!isBar)}
                      className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded"
                    >
                      Bar Diagram
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    <LineDiagramStock param={data.id} />
                  </div>
                </>
              ) : (
                <>
                  <div className="category grid grid-cols-8 pl-8 pt-5 text-xs pb-3">
                    <button
                      onClick={() => setIsBar(!isBar)}
                      className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded"
                    >
                      Line Diagram
                    </button>
                    <button className="mr-3 border-2 text-white border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                      Bar Diagram
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    <BarDiagramStock param={data.id} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailStock;
