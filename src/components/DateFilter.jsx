import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
	const [dateRange, setDateRange] = useState([null, null]);
	const [startDate, endDate] = dateRange;
	return (
		<>
			<div className="date-filter flex flec-row gap-1">
				<div className="icon text-lg">
					<CalendarMonthIcon />
				</div>
				<div className="from rounded text-gray-700">
					<DatePicker
						selectsRange={true}
						startDate={startDate}
						endDate={endDate}
						onChange={(update) => {
							setDateRange(update);
						}}
						isClearable={true}
						dateFormat="dd/MM/yyyy"
						className="pl-2 w-56 p-1 focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-2 rounded"
						placeholderText="Masukkan rentan tanggal"
					/>
				</div>
			</div>
		</>
	)
}

export default DateFilter