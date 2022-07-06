import DateFilter from "../components/DateFilter";
import moment from "moment";
import EmployeeCard from "../components/diagram/humanResource/EmployeeCard";
import CategoryEmployee from "../components/diagram/humanResource/CategoryEmployee";
import AgeGender from "../components/diagram/humanResource/AgeGender";
import Education from "../components/diagram/humanResource/Education";
import TypeEmployee from "../components/diagram/humanResource/TypeEmployee";
import WorkUnit from "../components/diagram/humanResource/WorkUnit";
import DetailPegawai from "../components/diagram/humanResource/modal/detailPegawai";

// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);


const HumanResource = () => {
  return (
    <div className="HR grow">

<DetailPegawai />

      <div className="grow m-3 rounded bg-[#04ac49]/10">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Human Resource</h4>
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
          <EmployeeCard type='pegawai' />
          <EmployeeCard type='tetap' />
          <EmployeeCard type='tidak-tetap' />
        </div>

        {/* Widget 2 */}
        <div className="widget-2 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-full mr-5 pb-8 pt-4 text-gray-700">
            KATEGORI PEGAWAI
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <CategoryEmployee />
            </div>
          </span>
        </div>

        {/* Widget 3 */}
        <div className="widget-3 gap-4 ml-8 mt-12 mr-6 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            PENDIDIKAN
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <Education />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            USIA
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <AgeGender />
            </div>
          </span>
        </div>

        {/* Widget 4 */}
        <div className="widget-4 gap-4 ml-8 mt-12 mr-6 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            JENIS PEGAWAI
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <TypeEmployee />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            UNIT KERJA
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <WorkUnit />
            </div>
          </span>
        </div>

      </div>
    </div>
  )
}

export default HumanResource