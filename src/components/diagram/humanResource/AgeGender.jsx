import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "< 20", laki_laki: 210, perempuan: 437, total: 657 },
  { name: "21-30", laki_laki: 160, perempuan: 140, total: 300 },
  { name: "31-40", laki_laki: 50, perempuan: 65, total: 115 },
  { name: "41-50", laki_laki: 20, perempuan: 15, total: 35 },
  { name: "> 51", laki_laki: 3, perempuan: 2, total: 5 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label pb-2">{`${label} Tahun : ${
          payload[0].value + payload[1].value
        }`}</p>
        <p className="intro text-black text-sm">{`Laki-laki : ${payload[0].value}`}</p>
        <p className="intro text-black text-sm">{`Perempuan : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const AgeGender = () => {
  return (
    <div className="age">
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<
// @ts-ignore
          CustomTooltip />} />
          <Legend />
          <Bar dataKey="laki_laki" stackId="a" fill="#3AB0FF" />
          <Bar dataKey="perempuan" fill="#F57CAC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeGender;
