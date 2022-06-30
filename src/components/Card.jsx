/* eslint-disable jsx-a11y/alt-text */


const Card = ({ type }) => {
	let data;

	// temporary
	const value = [59.2, 89.3, 76.1, 50.0, 0.0, 0.0];

	switch (type) {
		case "bor":
			data = {
				img: "images/icon-dkprs-1.png",
				title: "BOR",
				value: value[0],
			};
			break;
		case "alos":
			data = {
				img: "images/icon-dkprs-2.png",
				title: "ALOS",
				value: value[1],
			};
			break;
		case "toi":
			data = {
				img: "images/icon-dkprs-3.png",
				title: "TOI",
				value: value[2],
			};
			break;
		case "bto":
			data = {
				img: "images/icon-dkprs-4.png",
				title: "BTO",
				value: value[3],
			};
			break;
		case "ndr":
			data = {
				img: "images/icon-dkprs-5.png",
				title: "NDR",
				value: value[4],
			};
			break;
		case "gdr":
			data = {
				img: "images/icon-dkprs-6.png",
				title: "GDR",
				value: value[5],
			};
			break;
		default:
			break;
	}

	return (
		<div className="card p-5 basis-1/6 m-auto mr-5 ml-5 bg-white drop-shadow-xl rounded w-full">
				<img src={process.env.PUBLIC_URL + data.img} className="m-auto mb-4" />
			<div className="mb-5">
				<span className="title text-md text-gray-700 font-semibold">
					{data.title}
				</span>
			</div>
			<div>
				<span className="amount text-3xl text-gray-700">
					{data.value}
				</span>
			</div>
		</div>
	)
}

export default Card