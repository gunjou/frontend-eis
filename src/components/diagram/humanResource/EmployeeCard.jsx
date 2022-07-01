

const EmployeeCard = ({type}) => {
	let data;

	// temporary
	const value = [2048, 1536, 512];

	switch (type) {
		case "pegawai":
			data = {
				img: "images/icon-pegawai-total.png",
				title: "Pegawai",
				value: value[0],
			};
			break;
		case "tetap":
			data = {
				img: "images/icon-pegawai-tetap.png",
				title: "Tetap",
				value: value[1],
			};
			break;
		case "tidak-tetap":
			data = {
				img: "images/icon-pegawai-tidak-tetap.png",
				title: "Tidak Tetap",
				value: value[2],
			};
			break;
		default:
			break;
	}

	return (
		<div className="polyclinic-card flex basis-1/3 mr-5 ml-5 bg-white drop-shadow-xl rounded">
			<div className="left flex flex-col text-left">
				<span className="title text-sm m-2">
					{data.title}
				</span>
				<span className="value text-4xl m-3">
					{data.value}
				</span>
				<p className="detail text-xs m-2">
					details
				</p>
			</div>
			<div className="right absolute inset-y-0 right-0 m-5">
				<img src={process.env.PUBLIC_URL + data.img} alt={"employee-card"} />
			</div>
		</div>
	)
}

export default EmployeeCard