import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StockCard = ({ type }) => {
  let data;

  // temporary
  const pastValue = [1090500000, 885000000, 305500000];
  const currValue = [1386500000, 650000000, 327500000];

  switch (type) {
    case "optimal":
      data = {
        title: "Optimal",
        value: currValue[0],
        modal: "#optimal",
        percent: ((currValue[0] - pastValue[0]) / pastValue[0]) * 100,
      };
      break;
    case "overstock":
      data = {
        title: "Overstock",
        value: currValue[1],
        modal: "#overstock",
        percent: ((currValue[1] - pastValue[1]) / pastValue[1]) * 100,
      };
      break;
    case "understock":
      data = {
        title: "Understock",
        value: currValue[2],
        modal: "#understock",
        percent: ((currValue[2] - pastValue[2]) / pastValue[2]) * 100,
      };
      break;
    default:
      break;
  }

  return (
    <div className="stock-card flex basis-1/3 mr-5 ml-5 mb-3 bg-white drop-shadow-xl rounded">
      <div className="left flex flex-col text-left">
        <span className="title text-sm m-4 font-bold">{data.title}</span>
        <div className="value flex">
          <span className="value text-3xl ml-3 mt-3 mb-4">
            Rp{data.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
            ,00
          </span>
          <>
            {data.percent >= 0 ? (
              <>
                {data.title == "Optimal" ? (
                  <span className="text-xs float-right text-green-600">
                    <ArrowDropUpIcon />
                    {Number(Math.abs(data.percent).toFixed(1))}%
                  </span>
                ) : (
                  <span className="text-xs float-right text-red-600">
                    <ArrowDropUpIcon />
                    {Number(Math.abs(data.percent).toFixed(1))}%
                  </span>
                )}
              </>
            ) : (
              <>
                {data.title == "Optimal" ? (
                  <span className="text-xs float-right text-red-600">
                    <ArrowDropDownIcon />
                    {Number(Math.abs(data.percent).toFixed(1))}%
                  </span>
                ) : (
                  <span className="text-xs float-right text-green-600">
                    <ArrowDropDownIcon />
                    {Number(Math.abs(data.percent).toFixed(1))}%
                  </span>
                )}
              </>
            )}
          </>
        </div>
        <p className="detail text-xs m-2 cursor-pointer" >
            details ⟶
        </p>
      </div>
      <div
        className="right absolute inset-y-0 right-0 m-3 cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target={data.modal}
      >
        <InfoOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default StockCard;
