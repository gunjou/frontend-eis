import DateFilter from "../components/DateFilter";
import moment from "moment";
import PolyclinicCard from "../components/diagram/medicalRecord/PolyclinicCard";
import MedicalRecord1 from "../components/diagram/medicalRecord/MedicalRecord1";
import MedicalRecord3 from "../components/diagram/medicalRecord/MedicalRecord3";


// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);

const MedicalRecord = () => {
  return (
    <div className="medical-record grow">
      <div className="grow m-3 rounded bg-[#04ac49]/10">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Medical Record</h4>
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

        {/* Widget 2 */}
        <div className="widget-2 flex flex-row">
          <PolyclinicCard type='poliklinik1' />
          <PolyclinicCard type='poliklinik2' />
          <PolyclinicCard type='poliklinik3' />
        </div>

        {/* Widget 3 */}
        <div className="widget-3 flex flex-row mt-12 pl-5 text-left">
          <div className="basis-1/3 ">
            <span className="font-bold text-gray-700">
              MEDICAL RECORD 1
            </span>
            <div className="diagram pt-5">
              <MedicalRecord1 />
            </div>
          </div>
          <div className="basis-1/3">
            <span className="font-bold text-gray-700">
              MEDICAL RECORD 2
            </span>
            <div className="diagram pt-5">
              <MedicalRecord1 />
            </div>
          </div>
          <div className="basis-1/3">
            <span className="font-bold text-gray-700">
              MEDICAL RECORD 3
            </span>
            <div className="diagram pt-5">
              <MedicalRecord3 />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MedicalRecord