import DateFilter from "../components/DateFilter";
import moment from "moment";
import Card from "../components/Card";
import BarTrendVisitor from "../components/diagram/service/BarTrendVisitor";
import PatientPopulation from "../components/diagram/service/PatientPopulation";
import InpatientDistribution from "../components/diagram/service/InpatientDistribution";

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
      <div className="grow m-3 rounded bg-[#04ac49]/10">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Service</h4>
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
        <div className="mutu-pelayanan m-8 pb-10">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            STANDAR MUTU PELAYANAN
          </span>
          <div className="card flex flex-row">
            <Card type="bor" />
            <Card type="alos" />
            <Card type="toi" />
            <Card type="bto" />
            <Card type="ndr" />
            <Card type="gdr" />
          </div>
        </div>

        {/* Widget 2 */}
        <div className="widget-2 m-8 ">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            TREND KUNJUNGAN
          </span>
          <div className="grafik">
            <BarTrendVisitor />
          </div>
        </div>

        {/* Widget 3 */}
        <div className="widget-3 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            POPULASI PASIEN
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <PatientPopulation />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 mr-5 pb-8 pt-4 text-gray-700">
            SEBARAN RAWAT INAP
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <InpatientDistribution />
            </div>
          </span>
        </div>


      </div>
    </div>
  );
};

export default Service;
