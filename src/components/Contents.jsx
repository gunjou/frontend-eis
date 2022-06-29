import SidebarLeft from "./SidebarLeft"
import SidebarRight from "./SidebarRight"
import Home from "../pages/Home"
import Service from "../pages/Service"
import Inventory from "../pages/Inventory"
import MedicalRecord from "../pages/MedicalRecord"
import Finance from "../pages/Finance"
import HumanResource from "../pages/HumanResource"


const Contents = ({ type }) => {
	let page;

	const value = [59, 89, 76, 50, 2, 3, 12, 6, 19, 21];

	switch (type) {
		case "home":
			page = { src: <Home />, };
			break;
		case "service":
			page = { src: <Service />, };
			break;
		case "inventory":
			page = { src: <Inventory />, };
			break;
		case "medical-record":
			page = { src: <MedicalRecord />, };
			break;
		case "finance":
			page = { src: <Finance />, };
			break;
		case "human-resource":
			page = { src: <HumanResource />, };
			break;
		default:
			break;
	}

	return (
		<div className="contents">
			<SidebarLeft />
			{page.src}
			<SidebarRight />
		</div>
	);
}

export default Contents