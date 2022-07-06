import { dataBedUsage } from "../../datatable/home/usageBedCard";


const UsageBedCard = ({ type }) => {
	let data;

	switch (type) {
		case "bayi-pr":
			data = { img: "images/icon-tt-bayi-perempuan.png", title: "BAYI PEREMPUAN", detail: "0-30 Hari", value: dataBedUsage.bayi_pr, }; break;
		case "bayi-lk":
			data = { img: "images/icon-tt-bayi-laki-laki.png", title: "BAYI LAKI-LAKI", detail: "0-30 Hari", value: dataBedUsage.bayi_lk, }; break;
		case "anak-pr":
			data = { img: "images/icon-tt-anak-perempuan.png", title: "ANAK PEREMPUAN", detail: "30 Hari - 17 Tahun", value: dataBedUsage.anak_pr, }; break;
		case "anak-lk":
			data = { img: "images/icon-tt-anak-laki-laki.png", title: "ANAK LAKI-LAKI", detail: "30 Hari - 17 Tahun", value: dataBedUsage.anak_lk, }; break;
		case "pr-dewasa":
			data = { img: "images/icon-tt-perempuan-dewasa.png", title: "PEREMPUAN DEWASA", detail: "17 Tahun - 50 Tahun", value: dataBedUsage.pr_dewasa, }; break;
		case "lk-dewasa":
			data = { img: "images/icon-tt-laki-laki-geriatri.png", title: "LAKI-LAKI DEWASA", detail: "17 Tahun - 50 Tahun", value: dataBedUsage.lk_dewasa, }; break;
		case "geriatri":
			data = { img: "images/icon-tt-perempuan-geriatri.png", title: "GERIATRI", detail: "> 50 Tahun", value: dataBedUsage.geriatri, }; break;
		default:
			break;
	}

	return (
		<div className="usage-bed-card pt-2">
			<div className="h-16 w-96 flex rounded border  bg-white drop-shadow-xl hover:bg-[#B7C4BC]">
				<img
					src={process.env.PUBLIC_URL + data.img}
					className="w-16 p-1.5 rounded-full align-middle flex-none"
					alt="bed-usage-card"
				/>
				<div className="m-auto w-5/6 flex-col">
					<span className="flex">{data.title}</span>
					<span className="text-xs flex-1">{data.detail}</span>
				</div>
				<div className="m-auto mr-8 w-12 rounded bg-[#4C785D] text-center">
					<span className="p-2 text-white">{data.value}</span>
				</div>
			</div>
		</div>
	);
};

export default UsageBedCard;
