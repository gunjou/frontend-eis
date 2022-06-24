

const Card = ({type}) => {
  let data;

	// temporary
	const value = [59.2, 89.3, 76.1, 50.0, 0.0, 0.0];

	switch(type) {
		case "bor":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-1.png"} className="float-center pl-5 pr-5" />,
				title: "BOR",
				value : value[0],
			};
			break;
		case "alos":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-2.png"} className="float-center pl-5 pr-5" />,
				title: "ALOS",
				value : value[1],
			};
			break;
		case "toi":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-3.png"} className="float-center pl-5 pr-5" />,
				title: "TOI",
				value : value[2],
			};
			break;	
		case "bto":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-4.png"} className="float-center pl-5 pr-5" />,
				title: "BTO",
				value : value[3],
			};
			break;
		case "ndr":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-5.png"} className="float-center pl-5 pr-5" />,
				title: "NDR",
				value : value[4],
			};
			break;
		case "gdr":
			data = {
				img: <img src={process.env.PUBLIC_URL + "images/icon-dkprs-6.png"} className="float-center pl-5 pr-5" />,
				title: "GDR",
				value : value[5],
			};
			break;
		default:
			break;
	}

  return (
    <div className="card p-5 rounded border border-white bg-white drop-shadow-xl w-auto">
      {data.img}      
      <div className="title text-md p-2">
        {data.title}
      </div>
      <div className="amount text-3xl p-2">
        {data.value}
      </div>
    </div>
  )
}

export default Card