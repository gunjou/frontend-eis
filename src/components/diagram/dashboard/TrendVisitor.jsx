import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {month: 'Januari', minimum: 671, maximum: 301,},
  {month: 'Februari', minimum: 801, maximum: 351,},
  {month: 'Maret', minimum: 756, maximum: 433,},
  {month: 'April', minimum: 554, maximum: 102,},
  {month: 'Mei', minimum: 712, maximum: 300,},
  {month: 'Juni', minimum: 756, maximum: 370,},
  {month: 'Juli', minimum: 900, maximum: 412,},
  {month: 'Agustus', minimum: 800, maximum: 412,},
  {month: 'September', minimum: 600, maximum: 412,},
  {month: 'Oktober', minimum: 1100, maximum: 500,},
  {month: 'November', minimum: 1000, maximum: 512,},
  {month: 'Desember', minimum: 1224, maximum: 412,},
];

const TrendVisitor = () => {
  return (
    <div className="trend-visitors">
      <ResponsiveContainer width={"99%"} height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="minimum" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="maximum" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendVisitor