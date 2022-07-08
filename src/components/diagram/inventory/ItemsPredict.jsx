import React from "react";
import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, } from "recharts";

const data = [
  { month: "Januari", actual: 6850, predict: 1917, under: 6550 },
  { month: "Februari", actual: 8250, predict: 1626, under: 6499 },
  { month: "Maret", actual: 6924, predict: 1737, under: 7124 },
  { month: "April", actual: 7920, predict: 1948, under: 7420 },
  { month: "Mei", actual: 7777, predict: 1990, under: 7177 },
  { month: "Juni", actual: 8109, predict: 1693, under: 7809 },
  { month: "Juli", actual: 8463, predict: 1606, under: 8163 },
  { month: "Agustus", actual: null, predict: 1665, under: 8400 },
  { month: "September", actual: null, predict: null, under: null },
  { month: "Oktober", actual: null, predict: null, under: null },
  { month: "November", actual: null, predict: null, under: null },
  { month: "Desember", actual: null, predict: null, under: null },
];

const CustomTooltip = ({ active, payload, label }) => {
  let status;
	let fill;
  if (active && payload && payload.length) {
    if (payload[2] == null) {
      payload[2] = 0;
    }
		if (payload[2].value < payload[0].value) {
      status = "Understock";
			fill = '#A6AB00'
    } else if (payload[2].value > payload[0].value + payload[1].value) {
			status = "Overstock";
			fill = '#F78983'
		} else {
			status = "Optimal";
			fill = '#7AAB6C'
		}
    return (
      <div className="custom-tooltip text-left bg-gray-100/90 border p-3 pb-3">
        <p className="label pb-2 text-md font-bold" style={{color: fill}}>{`${label} : ${status}`}</p>
        <p className="intro text-black text-sm text-[#000000]">{`Actual : ${payload[2].value}`}</p>
        <p className="intro text-black text-sm text-[#7AAB6C]">{`Optimal : ${
          payload[0].value + 1
        } - ${payload[0].value + payload[1].value}`}</p>
        <p className="intro text-black text-sm text-[#F78983]">{`Understock : < ${payload[0].value}`}</p>
        <p className="intro text-black text-sm text-[#A6AB00]">{`Overstock : > ${
          payload[0].value + payload[1].value
        }`}</p>
      </div>
    );
  }
  return null;
};

const ItemsPredict = () => {
  return (
    <div className="items-predict">
      <ResponsiveContainer width="99%" height={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis type="number" />
          <Tooltip content={CustomTooltip} />
          <Area
            dataKey="under"
            stackId="1"
            stroke="rgba(0,0,0,0)"
            fill="rgba(0,0,0,0)"
            opacity={0.3}
          />
          <Area
            dataKey="predict"
            stackId="1"
            stroke="rgba(0,0,0,0)"
            fill="#82ca9d"
          />
          <Line dataKey="actual" stroke="#000000" fill="#000000" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ItemsPredict;
