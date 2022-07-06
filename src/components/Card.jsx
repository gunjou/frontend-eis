/* eslint-disable jsx-a11y/alt-text */
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { pastValue, currValue } from './datatable/cardValue';


const Card = ({ type }) => {
	let data;

	switch (type) {
		case "bor":
			data = { img: "images/icon-dkprs-1.png", title: "BOR", value: currValue[0], percent: ((currValue[0]-pastValue[0])/pastValue[0])*100, }; break;
		case "alos":
			data = { img: "images/icon-dkprs-2.png", title: "ALOS", value: currValue[1], percent: ((currValue[1]-pastValue[1])/pastValue[1])*100, }; break;
		case "toi":
			data = { img: "images/icon-dkprs-3.png", title: "TOI", value: currValue[2], percent: ((currValue[2]-pastValue[2])/pastValue[2])*100, }; break;
		case "bto":
			data = { img: "images/icon-dkprs-4.png", title: "BTO", value: currValue[3], percent: ((currValue[3]-pastValue[3])/pastValue[3])*100, }; break;
		case "ndr":
			data = { img: "images/icon-dkprs-5.png", title: "NDR", value: currValue[4], percent: ((currValue[4]-pastValue[4])/pastValue[4])*100, }; break;
		case "gdr":
			data = { img: "images/icon-dkprs-6.png", title: "GDR", value: currValue[5], percent: ((currValue[5]-pastValue[5])/pastValue[5])*100, }; break;
		default:
			break;
	}

	return (
		<div className="card p-5 basis-1/6 m-auto mr-5 ml-5 bg-white drop-shadow-xl rounded w-full flex flex-col">
			<img src={process.env.PUBLIC_URL + data.img} className="m-auto mb-4" />
			<div className="mb-3">
				<span className="title text-md text-gray-700 font-semibold">
					{data.title}
				</span>
			</div>
			<div className="status">
				<>
				{data.percent >= 0 ?
				(
				<span className="text-xs float-right text-red-600">
					<ArrowDropUpIcon />
					{Number((data.percent).toFixed(1))}%
				</span>
				):
				(
					<span className="text-xs float-right text-green-600">
					<ArrowDropDownIcon />
					{Number(Math.abs((data.percent)).toFixed(1))}%
				</span>
				)
			}
				</>
			</div>
			<div>
				<span className="amount pl-3.5 text-3xl text-gray-700">
					{data.value}%
				</span>
			</div>
		</div>
	)
}

export default Card