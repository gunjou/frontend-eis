import DateFilter from "../components/DateFilter";
import Card from "../components/Card";
import Widget from "../components/diagram/dashboard/Widget";
import TrendVisitor from "../components/diagram/dashboard/TrendVisitor";
import TypeVisitor from "../components/diagram/dashboard/TypeVisitor";
import BedAvailability from "../components/diagram/dashboard/BedAvailability";
import UsageBedCard from "../components/diagram/dashboard/UsageBedCard";
import TopDiagnosa from "../components/diagram/dashboard/TopDiagnosa";
import moment from "moment";

import React, { useState } from 'react'

// Method return date
const current = new Date();
const date = moment(
  new Date(
    `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  )
);

const Home = () => {
  const [isVisitor, setIsVisitor] = useState(false);

  return (
    <div className="home grow">

      {/* Contents */}
      <div className="flex-1 m-3 rounded bg-[#04ac49]/10">
        {/* Title */}
        <div className="title text-left ml-5 p-3 text-gray-700 flex">
          <div className="title flex-1">
            <h4 className="text-2xl font-bold">Dashboard</h4>
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
        <>
          {!isVisitor ?
            (
              <div className="widget-area border border-white bg-white drop-shadow-xl m-5 rounded pb-3">
                <div className="category grid grid-cols-8 pl-8 pt-5 text-xs pb-3">
                  <button className="mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                    Pasien Terlayani
                  </button>
                  <button onClick={() => setIsVisitor(!isVisitor)} className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded">
                    Pasien Pengunjung
                  </button>
                </div>
                <div className="widget grid grid-cols-4">
                  <Widget type="pasien-rawat-inap" />
                  <Widget type="pasien-igd" />
                  <Widget type="pasien-rawat-jalan" />
                  <Widget type="pasien-radiologi" />
                  <Widget type="pasien-laboratorium" />
                  <Widget type="pasien-rehabilitasi" />
                  <Widget type="pasien-bedah" />
                  <Widget type="farmasi" />
                </div>
              </div>
            ) :
            (
              <div className="widget-area border border-white bg-white drop-shadow-xl m-5 rounded pb-3">
                <div className="category grid grid-cols-8 pl-8 pt-5 text-xs pb-3">
                  <button onClick={() => setIsVisitor(!isVisitor)} className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded">
                    Pasien Terlayani
                  </button>
                  <button className="mr-3 border-2 text-white border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded cursor-default">
                    Pasien Pengunjung
                  </button>
                </div>
                <div className="widget grid grid-cols-4">
                  <Widget type="pengunjung-rawat-inap" />
                  <Widget type="pengunjung-igd" />
                  <Widget type="pengunjung-rawat-jalan" />
                  <Widget type="pengunjung-radiologi" />
                  <Widget type="pengunjung-laboratorium" />
                  <Widget type="pengunjung-rehabilitasi" />
                </div>
              </div>
            )}
        </>

        {/* Widget 2 */}
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

        {/* Widget 3 */}
        <div className="widget-3 m-8 ">
          <span className="font-bold text-left flex pb-5 pt-4 text-gray-700">
            TREND PENGUNJUNG PASIEN RAWAT JALAN
          </span>
          <div className="grafik">
            <TrendVisitor />
          </div>
        </div>

        {/* Widget 4 */}
        <div className="widget-4 gap-4 ml-8 mt-12 flex flex-row text-left">
          <span className="font-bold text-left basis-1/2 pb-8 pt-4 text-gray-700">
            KETERSEDIAAN TEMPAT TIDUR PER KELAS
            <div className="p-4 rounded border-white bg-white drop-shadow-xl">
              <BedAvailability />
            </div>
          </span>
          <span className="font-bold text-left basis-1/2 mr-5 pb-5 pt-4 text-gray-700">
            KUNJUNGAN RUMAH SAKIT BERDASARKAN JENIS PASIEN
            <div className="pt-3 rounded border-white bg-white drop-shadow-xl">
              <TypeVisitor />
            </div>
          </span>
        </div>

        {/* Widget 5 */}
        <div className="widget-5 ml-8 mt-12 flex flex-row text-left text-gray-700">
          <div className="left font-bold">
            <span className="basis-1/2 ">PEMAKAIAN TEMPAT TIDUR</span>
            <UsageBedCard type="bayi-pr" />
            <UsageBedCard type="bayi-lk" />
            <UsageBedCard type="anak-pr" />
            <UsageBedCard type="anak-lk" />
            <UsageBedCard type="pr-dewasa" />
            <UsageBedCard type="lk-dewasa" />
            <UsageBedCard type="geriatri" />
          </div>
          <div className="right font-bold h-10 grow pl-8 text-gray-700">
            <span className="basis-1/2 ml-5">10 BESAR DIAGNOSA</span>
            <div className="diagram pt-5">
              <TopDiagnosa />
            </div>
          </div>
        </div>

        <br />
      </div>

    </div>
  );
};

export default Home;
