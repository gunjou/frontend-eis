import { dataStatusStock } from "components/datatable/inventory/dataStatusStock";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const toPercent = (decimal) => `${(decimal * 100).toFixed(1)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio);
};

const CustomTooltip = ({ active, payload, label }) => {
  const total = payload.reduce((result, entry) => result + entry.value, 0);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-left bg-gray-100/90 border p-3">
        <p className="label pb-2 text-sm font-bold">{`${label} : ${formatter.format(total)}`}</p>
        <p className="intro text-black text-sm text-[#49ABA6]">{`Overstock : ${formatter.format(payload[2].value)} (${getPercent(payload[2].value, total)}) `}</p>
        <p className="intro text-black text-sm text-[#7AAB6C]">{`Optimal : ${formatter.format(payload[1].value)} (${getPercent(payload[1].value, total)}) `}</p>
        <p className="intro text-black text-sm text-[#F78983]">{`Understock : ${formatter.format(payload[0].value)} (${getPercent(payload[0].value, total)}) `}</p>
      </div>
    );
  }
  return null;
};

const TrendStock = () => {
  return (
    <div className="trend-stock">
      <ResponsiveContainer width="99%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={dataStatusStock}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={CustomTooltip} />
          <Area type="monotone" dataKey="under" stackId="1" stroke="#F78983" fill="#F78983" strokeWidth={0} />
          <Area type="monotone" dataKey="optimal" stackId="1" stroke="#7AAB6C" fill="#7AAB6C" strokeWidth={0} />
          <Area type="monotone" dataKey="over" stackId="1" stroke="#49ABA6" fill="#49ABA6" strokeWidth={0} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendStock;
