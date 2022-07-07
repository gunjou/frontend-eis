import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const DataFormater = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

const data = [
  { month: "Januari", optimal: 885500000, over: 700000000, under: 307500000 },
  { month: "Februari", optimal: 805500000, over: 640000000, under: 397500000 },
  { month: "Maret", optimal: 892500000, over: 770000000, under: 317500000 },
  { month: "April", optimal: 904500000, over: 650000000, under: 227500000 },
  { month: "Mei", optimal: 795500000, over: 800000000, under: 280500000 },
  { month: "Juni", optimal: 801500000, over: 700000000, under: 200000000 },
  { month: "Juli", optimal: 770500000, over: 560000000, under: 300500000 },
  { month: "Agustus", optimal: 990000000, over: 450000000, under: 150500000 },
  { month: "September", optimal: 1000500000, over: 560000000, under: 257500000, },
  { month: "Oktober", optimal: 960000000, over: 780000000, under: 307500000 },
  { month: "November", optimal: 970000000, over: 800000000, under: 300500000 },
  { month: "Desember", optimal: 1090500000, over: 650000000, under: 327500000 },
];

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
        <p className="intro text-black text-sm text-[#F78983]">{`Overstock : ${formatter.format(payload[2].value)} (${getPercent(payload[2].value, total)}) `}</p>
        <p className="intro text-black text-sm text-[#7AAB6C]">{`Optimal : ${formatter.format(payload[1].value)} (${getPercent(payload[1].value, total)}) `}</p>
        <p className="intro text-black text-sm text-[#49ABA6]">{`Understock : ${formatter.format(payload[0].value)} (${getPercent(payload[0].value, total)}) `}</p>
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
          data={data}
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
          <Area type="monotone" dataKey="under" stackId="1" stroke="#49ABA6" fill="#49ABA6" strokeWidth={0} />
          <Area type="monotone" dataKey="optimal" stackId="1" stroke="#7AAB6C" fill="#7AAB6C" strokeWidth={0} />
          <Area type="monotone" dataKey="over" stackId="1" stroke="#F78983" fill="#F78983" strokeWidth={0} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendStock;
