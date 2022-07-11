import React from "react";

const ListRS = () => {
  return (
    <div className="listRs grow m-8 bg-[#04ac49]/20 rounded">
      <div className="title m-auto p-8">
        <span className="text-2xl font-bold text-gray-700">
          Pilih Cabang Rumah Sakit
        </span>
      </div>
      <div className="list m-auto grid grid-cols-4 gap-6 p-3 ml-5 mr-5">
        <div className="text-lg p-1 rounded mb-6 bg-white hover:drop-shadow-2xl">
          <a href="/login">
            <img src={process.env.PUBLIC_URL + "images/rs-1.jpg"} alt="rs-1" />
            <hr />
            <span className="text-gray-700">Rumah Sakit 1</span>
          </a>
        </div>
        <div className="text-lg p-1 rounded mb-6 bg-white hover:drop-shadow-2xl">
          <a href="/login">
            <img src={process.env.PUBLIC_URL + "images/rs-2.jpg"} alt="rs-1" />
            <hr />
            <span className="text-gray-700">Rumah Sakit 2</span>
          </a>
        </div>
        <div className="text-lg p-1 rounded mb-6 bg-white hover:drop-shadow-2xl">
          <a href="/login">
            <img src={process.env.PUBLIC_URL + "images/rs-3.jpg"} alt="rs-1" />
            <hr />
            <span className="text-gray-700">Rumah Sakit 3</span>
          </a>
        </div>
        <div className="text-lg p-1 rounded mb-6 bg-white hover:drop-shadow-2xl">
          <a href="/login">
            <img src={process.env.PUBLIC_URL + "images/rs-4.jpg"} alt="rs-1" />
            <hr />
            <span className="text-gray-700">Rumah Sakit 4</span>
          </a>
        </div>
        <div className="text-lg p-1 rounded mb-6 bg-white hover:drop-shadow-2xl">
          <a href="/login">
            <img src={process.env.PUBLIC_URL + "images/rs-3.jpg"} alt="rs-1" />
            <hr />
            <span className="text-gray-700">Rumah Sakit 5</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListRS;
