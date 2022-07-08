import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
	{ name: 'Kebidanan', total: 3800, },
	{ name: 'Perinatologi', total: 3000, },
	{ name: 'Pembedahan', total: 2000, },
	{ name: 'Radiologi', total: 2780, },
	{ name: 'Laboratorium', total: 1890, },
	{ name: 'Rehabilitasi Medik', total: 2390, },
	{ name: 'Pelayanan Khusus', total: 3490, },
	{ name: 'Kesehatan Jiwa', total: 3490, },
	{ name: 'Keluarga Berencana', total: 3490, },
  ];

const MedicTrend = () => {
	return (
		<div className="grafik ">
			<ResponsiveContainer width="99%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
					className="text-xs"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="total" name='Total' fill="#cfa3fa" barSize={60} />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
		</div>
	)
}

export default MedicTrend