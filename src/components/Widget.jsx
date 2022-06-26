/* eslint-disable jsx-a11y/alt-text */

const Widget = ({ type }) => {
  let data;

  // temporary
  const value = [59, 89, 76, 50, 2, 3, 12, 6, 19, 21];

  switch (type) {
    case "rawat-jalan":
      data = {
        img: "images/icon-pasien-rawat-jalan.png",
        title: "Pasien Rawat Jalan",
        value: value[0],
      };
      break;
    case "igd":
      data = {
        img: "images/icon-pasien-emergency.png",
        title: "Pasien IGD",
        value: value[1],
      };
      break;
    case "rawat-inap":
      data = {
        img: "images/icon-pasien-rawat-inap.png",
        title: "Pasien Rawat Inap",
        value: value[2],
      };
      break;
    case "radiologi":
      data = {
        img: "images/icon-radiologi.png",
        title: "Pasien Radiologi",
        value: value[3],
      };
      break;
    case "laboratorium":
      data = {
        img: "images/icon-laboratorium.png",
        title: "Pasien Laboratorium",
        value: value[4],
      };
      break;
    case "rehabilitasi":
      data = {
        img: "images/icon-pasien.png",
        title: "Pasien Rehabilitasi Medik",
        value: value[5],
      };
      break;
    case "bedah":
      data = {
        img: "images/icon-bedah.png",
        title: "Pasien Bedah",
        value: value[6],
      };
      break;
    case "farmasi":
      data = {
        img: "images/icon-farmasi.png",
        title: "Pasien Farmasi",
        value: value[7],
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget ml-5 mb-3 w-[270px]">
      <div className="card p-3 rounded border border-white bg-white drop-shadow-xl">
        <div className="left flex flex-col text-gray-700">
          <div className="title w-48 font-bold text-sm text-left">
            {data.title}
          </div>
          <div className="right flex flex-row">
            <div className="counter grow text-left text-4xl p-2">
              {data.value}
            </div>
            <div className="text-right">
              <img
                src={process.env.PUBLIC_URL + data.img}
                className="h-17 w-17"
              />
            </div>
          </div>
          <div className="detail text-left text-xs">detail</div>
        </div>
      </div>
    </div>
  );
};

export default Widget;

// const Widget = () => {
//   return (
//     <div className="widget flex-col">
// 			<div className="category float-left pl-8 pt-5 text-xs">
// 				<button className='mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
// 				<button className='mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
// 			</div>
// 			<div className="card flex mt-16 ml-8">
// <div className="card flex mt-16 ml-8 border-1 rounded bg-red-500">

// 				<div className="left">
// 					<div className="title font-bold p-2">
// 						Pasien Rawat Jalan
// 					</div>
// 					<div className="value p-2 text-5xl text-left pl-4">
// 						800
// 					</div>
// 					<div className="detail p-2 text-left text-xs">
// 						detail --
// 					</div>
// 				</div>
// 				<div className="right">
// 					<img src={process.env.PUBLIC_URL + "images/icon-pasien-rawat-inap.png"} alt="pasien rawat inap" className="w-16 pt-4 mr-4" />
// 				</div>
// 				</div>

// 				<div className="card flex mt-16 ml-8 border-1 rounded bg-red-500">
// 				<div className="left">
// 					<div className="title font-bold p-2">
// 						Pasien Rawat Jalan
// 					</div>
// 					<div className="value p-2 text-5xl text-left pl-4">
// 						800
// 					</div>
// 					<div className="detail p-2 text-left text-xs">
// 						detail --
// 					</div>
// 				</div>
// 				<div className="right">
// 					<img src={process.env.PUBLIC_URL + "images/icon-pasien-rawat-inap.png"} alt="pasien rawat inap" className="w-16 pt-4 mr-4" />
// 				</div>
// 				</div>
// </div>

//     </div>
//   )
// }

// export default Widget
