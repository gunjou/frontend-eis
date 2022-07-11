import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Bayi Lahir Hidup", more2500g: 10, less2500g: 7, total: 17 },
  { name: "Kematian Perinatal", kematian: 5, less7d: 3, total: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-100 border p-3">
          <p className="label pb-2">{`${label} : ${
            payload[0].value + payload[1].value
          }`}</p>
          <p className="intro text-black text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="intro text-black text-sm">{`${payload[1].name} : ${payload[1].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

const Prinatologi = () => {
  return (
    <div className="prinatologi">
        <ResponsiveContainer width="99%" height={330}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<
// @ts-ignore
CustomTooltip />} />
          {/* <Legend /> */}
          <Bar dataKey="less2500g" name="< 2500 gram" stackId="a"fill="#45d17d" barSize={65} />
          <Bar dataKey="more2500g" name=">= 2500 gram" stackId="a" fill="#369e6a" />
          <Bar dataKey="less7d" name="Mati Neonatal < 7 hari" stackId="a" fill="#ff8d7e" />
          <Bar dataKey="kematian" name="Kelahiran Mati" stackId="a" fill="#ff463c" />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Prinatologi