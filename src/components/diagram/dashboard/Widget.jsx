/* eslint-disable jsx-a11y/alt-text */
import { setParam } from '../../../pages/Home';

const Widget = ({ type }) => {
  let data;

  // temporary
  const value = [59, 89, 76, 50, 2, 3, 12, 6, 19, 21, 76, 50, 2, 3];

  switch (type) {
    case "pasien-rawat-jalan":
      data = {img: "images/icon-pasien-rawat-jalan.png", title: "Pasien Rawat Jalan", value: value[0], modal: "#detail-pasien-rawat-jalan"}; break;
    case "pasien-igd":
      data = {img: "images/icon-pasien-emergency.png", title: "Pasien IGD", value: value[1], modal: "#detail-pasien-igd"}; break;
    case "pasien-rawat-inap":
      data = {img: "images/icon-pasien-rawat-inap.png", title: "Pasien Rawat Inap", value: value[2], modal: "#detail-pasien-rawat-inap"}; break;
    case "pasien-radiologi":
      data = {img: "images/icon-radiologi.png", title: "Pasien Radiologi", value: value[3], modal: "#detail-pasien-radiologi"}; break;
    case "pasien-laboratorium":
      data = {img: "images/icon-laboratorium.png", title: "Pasien Laboratorium", value: value[4], modal: "#detail-pasien-laboratorium"}; break;
    case "pasien-rehabilitasi":
      data = {img: "images/icon-pasien.png", title: "Pasien Rehabilitasi Medik", value: value[5], modal: "#detail-pasien-rehabilitasi"}; break;
    case "pasien-bedah":
      data = {img: "images/icon-bedah.png", title: "Pasien Bedah", value: value[6], modal: "#detail-pasien-bedah"}; break;
    case "farmasi":
      data = {img: "images/icon-farmasi.png", title: "Pasien Farmasi", value: value[7], modal: "#detail-farmasi"}; break;
    case "pengunjung-rawat-jalan":
      data = {img: "images/icon-pasien-rawat-jalan.png", title: "Pengunjung Rawat Jalan", value: value[8], modal: "#detail-pengunjung-rawat-jalan"}; break;
    case "pengunjung-igd":
      data = {img: "images/icon-pasien-emergency.png", title: "Pengunjung IGD", value: value[9], modal: "#detail-pengunjung-igd"}; break;
    case "pengunjung-rawat-inap":
      data = {img: "images/icon-pasien-rawat-inap.png", title: "Pengunjung Rawat Inap", value: value[10], modal: "#detail-pengunjung-rawat-inap"}; break;
    case "pengunjung-radiologi":
      data = {img: "images/icon-radiologi.png", title: "Pengunjung Radiologi", value: value[11], modal: "#detail-pengunjung-radiologi"}; break;
    case "pengunjung-laboratorium":
      data = {img: "images/icon-laboratorium.png", title: "Pengunjung Laboratorium", value: value[12], modal: "#detail-pengunjung-laboratorium"}; break;
    case "pengunjung-rehabilitasi":
      data = {img: "images/icon-pasien.png", title: "Pengunjung Rehabilitasi Medik", value: value[13], modal: "#detail-pengunjung-rehabilitasi"}; break;
    default:
      break;
  }

  const handleClick = event => {
    console.log(event.currentTarget.id);
  };

  return (
    <div className="widget flex basis-1/3 mr-5 ml-5 mb-5 bg-white drop-shadow-xl rounded">
			<div className="left flex flex-col text-left">
				<span className="title text-sm m-2">
					{data.title}
				</span>
				<span className="value text-4xl m-3">
					{data.value}
				</span>
				<p className="detail text-xs m-2 cursor-pointer" data-bs-toggle="modal" data-bs-target={data.modal}>
					details ⟶
          </p>
          </div>
          <div className="right absolute inset-y-0 right-0 m-5">
				<img src={process.env.PUBLIC_URL + data.img} />
			</div>
		</div>
  );
};

export default Widget;
