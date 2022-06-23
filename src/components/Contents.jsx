import Filter from "./Filter"
import Widget from "./Widget";
import Card from "./Card";
import TrendVisitor from "./diagram/TrendVisitor";
import TypeVisitor from "./diagram/TypeVisitor";
import moment from 'moment'


const current = new Date();
const date = moment(new Date(`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`));

const Contents = () => {
  return (
    <div className="flex-1 m-3 bg-[#04A449]/10 rounded">
      {/* <TrendVisitor /> */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">
              Dashboard
            </h4>
            <span className="text-sm text-gray">
              {date.format('DD MMMM YYYY')}
            </span>
          </div>
          <div className="filter-date text-right p-3">
            <Filter />
          </div>
        </div>
        <div className="widget-area border border-white bg-white drop-shadow-xl m-5 rounded flex flex-wrap pb-3">
          <div className="category float-left pl-8 pt-5 text-xs pb-2">
     				<button className='mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
     				<button className='mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
     			</div>
          <div className="flex flex-wrap gap-5">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
        </div>
        <div className="mutu-pelayanan m-8 pb-10">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            STANDAR MUTU PELAYANAN
          </span>
          <div className="card flex flex-wrap gap-10 w-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          </div>
        </div>
        <div className="mutu-pelayanan m-8">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            TREND PENGUNJUNG PASIEN RAWAT JALAN
          </span>
          <div className="grafik">
            <TrendVisitor />
          </div>
        </div>
        <div className="ketersediaan-kamar m-8">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            KETERSEDIAAN TEMPAT TIDUR PER KELAS
          </span>
          <div className="grafik flex">
            
          </div>
        </div>
        <div className="flex">

            <TypeVisitor />
            <TypeVisitor />
        </div>
    </div>
  )
}

export default Contents