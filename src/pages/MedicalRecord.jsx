import DateFilter from "../components/DateFilter";
import moment from "moment";
import MedicTrend from "components/diagram/medicalRecord/MedicTrend";
import Midwifery from "../components/diagram/medicalRecord/Midwifery";
import KBDiagram from "components/diagram/medicalRecord/KBDiagram";
import Prinatologi from "components/diagram/medicalRecord/Prinatologi";
import RehabilitasiMedis from "components/diagram/medicalRecord/RehabilitasiMedis";
import KesehatanJiwa from "components/diagram/medicalRecord/KesehatanJiwa";
import Surgery from "components/diagram/medicalRecord/Surgery";
import Laboratorium from "components/diagram/medicalRecord/Laboratorium";
import Radiologi from "components/diagram/medicalRecord/Radiologi";

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

        {/* Widget 1 */}
        <div className="widget-1 m-8 pb-10">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            SEBARAN KEGIATAN MEDIS
          </span>
          <div className="grafik">
            <MedicTrend />
          </div>
        </div>

        {/* Widget 2 */}
        <div className="widget-2 flex flex-row mt-12 pl-5 text-left">
          <div className="basis-1/3 ">
            <span className="font-bold text-gray-700">KEGIATAN KEBIDANAN</span>
            <div className="diagram pt-5">
              <Midwifery />
            </div>
          </div>
          <div className="basis-1/3">
            <span className="font-bold text-gray-700">KEGIATAN KELUARGA BERENCANA</span>
            <div className="diagram pt-5">
              <KBDiagram />
            </div>
          </div>
          <div className="basis-1/3">
            <span className="font-bold text-gray-700">KEGIATAN PRINATOLOGI</span>
            <div className="diagram pt-5">
              <Prinatologi />
            </div>
          </div>
        </div>
        
        {/* Widget 3 */}
        <div className="widget-3 flex flex-row mt-12 pl-5 text-left">
          <div className="basis-1/2">
            <span className="font-bold text-gray-700">KEGIATAN REHABILITASI MEDIS</span>
            <div className="diagram pt-3">
              <RehabilitasiMedis />
            </div>
          </div>
          <div className="basis-1/2 ">
            <span className="font-bold text-gray-700">KEGIATAN KESEHATAN JIWA</span>
            <div className="diagram pt-5">
              <KesehatanJiwa />
            </div>
          </div>
        </div>

        {/* Widget 4 */}
        <div className="widget-4 m-8 pb-10">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            KEGIATAN PEMBEDAHAN
          </span>
          <div className="grafik">
            <Surgery />
          </div>
        </div>

        {/* Widget 5 */}
        <div className="widget-5 flex flex-row mt-12 pb-8 pl-5 text-left">
          <div className="basis-1/2 ">
            <span className="font-bold text-gray-700">KEGIATAN LABORATORIUM</span>
            <div className="diagram pt-5">
              <Laboratorium />
            </div>
          </div>
          <div className="basis-1/2">
            <span className="font-bold text-gray-700">KEGIATAN RADIOLOGI</span>
            <div className="diagram pt-3">
              <Radiologi />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MedicalRecord;
