import Filter from "../components/Filter";
import moment from "moment";
import Card from "../components/Card";
import BarTrendVisitor from "../components/diagram/BarTrendVisitor";

// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);

const Service = () => {
  return (
    <div className="service grow">
      {/* Contents */}
      <div className="grow m-3 rounded bg-[#04ac49]/10 rounded  mr-16">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Service</h4>
            <span className="text-sm text-gray">
              {date.format("DD MMMM YYYY")}
            </span>
          </div>

          {/* Filter Date */}
          <div className="filter-date text-right p-3">
            <Filter />
          </div>
        </div>

        {/* Widget 1 */}
        <div className="mutu-pelayanan m-8 pb-10">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            STANDAR MUTU PELAYANAN
          </span>
          <div className="card flex flex-wrap gap-10 w-auto">
            <Card type="bor" />
            <Card type="alos" />
            <Card type="toi" />
            <Card type="bto" />
            <Card type="ndr" />
            <Card type="gdr" />
          </div>
        </div>

      <BarTrendVisitor />


      </div>
    </div>
  );
};

export default Service;
