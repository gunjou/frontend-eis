import Filter from "../components/Filter";
import moment from "moment";
import EmployeeCard from "../components/diagram/humanResource/EmployeeCard";
import CategoryEmployee from "../components/diagram/humanResource/CategoryEmployee";
import Gender from "../components/diagram/humanResource/Gender";
import Age from "../components/diagram/humanResource/Age";
import Education from "../components/diagram/humanResource/Education";

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
      <div className="grow m-3 rounded bg-[#04ac49]/10 rounded  mr-16">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Human Resource</h4>
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
        <div className="widget-2 flex flex-row">
          <EmployeeCard type='pegawai' />
          <EmployeeCard type='tetap' />
          <EmployeeCard type='tidak-tetap' />
        </div>

        {/* Widget 2 */}
        <div className="widget-2 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            KATEGORI PEGAWAI
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <CategoryEmployee />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 mr-5 pb-8 pt-4 text-gray-700">
            JENIS KELAMIN
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <Gender />
            </div>
          </span>
        </div>

        {/* Widget 3 */}
        <div className="widget-2 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            USIA
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <Age />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 mr-5 pb-8 pt-4 text-gray-700">
            PENDIDIKAN
            <div className="p-3 rounded border-white bg-white drop-shadow-xl">
              <Education />
            </div>
          </span>
        </div>

      </div>
    </div>
  )
}

export default HumanResource