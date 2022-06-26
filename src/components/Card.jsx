/* eslint-disable jsx-a11y/alt-text */


const Card = ({type}) => {
  let data;

	// temporary
	const value = [59.2, 89.3, 76.1, 50.0, 0.0, 0.0];

	switch(type) {
		case "bor":
			data = {
				img: "images/icon-dkprs-1.png",
				title: "BOR",
				value : value[0],
			};
			break;
		case "alos":
			data = {
				img: "images/icon-dkprs-2.png",
				title: "ALOS",
				value : value[1],
			};
			break;
		case "toi":
			data = {
				img: "images/icon-dkprs-3.png",
				title: "TOI",
				value : value[2],
			};
			break;	
		case "bto":
			data = {
				img: "images/icon-dkprs-4.png",
				title: "BTO",
				value : value[3],
			};
			break;
		case "ndr":
			data = {
				img: "images/icon-dkprs-5.png",
				title: "NDR",
				value : value[4],
			};
			break;
		case "gdr":
			data = {
				img: "images/icon-dkprs-6.png",
				title: "GDR",
				value : value[5],
			};
			break;
		default:
			break;
	}

  return (
    <div className="card p-5 rounded border border-white bg-white drop-shadow-xl w-auto">
      <img src={process.env.PUBLIC_URL + data.img} className="float-center pl-5 pr-5" />
      <div className="title text-md p-2 text-gray-700">
        {data.title}
      </div>
      <div className="amount text-3xl p-2 text-gray-700">
        {data.value}
      </div>
    </div>
  )
}

export default Card