import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {name: 'Januari', max: 5300, min: 4000, },
    {name: 'Februari', max: 4798, min: 3000, },
    {name: 'Maret', max: 9800, min: 2000, },
    {name: 'April', max: 3908, min: 2780, },
    {name: 'Mei', max: 4800, min: 1890, },
    {name: 'Juni', max: 3800, min: 2390, },
    {name: 'Juli', max: 4300, min: 3490, },
    {name: 'Agustus', max: 8800, min: 2000, },
    {name: 'September', max: 3908, min: 2780, },
    {name: 'Oktober', max: 4800, min: 1890, },
    {name: 'November', max: 3800, min: 2390, },
    {name: 'Desember', max: 4300, min: 3490, },
  ];

const TopDiagnosa = () => {
  return (
    <div className='top-diagnosa'>
        <ResponsiveContainer width="99%" height={400}>
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="min" fill="#8884d8" />
          <Bar dataKey="max" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopDiagnosa