import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Psikotes', total: 9, },
    { name: 'Konsultasi', total: 38, },
    { name: 'Medikamenosta', total: 127, },
    { name: 'Elektro Medik', total: 0, },
    { name: 'Psikoterapi', total: 114, },
    { name: 'Play Therapy', total: 0, },
    { name: 'Rehabilitasi', total: 0, },
    { name: 'Napsa', total: 39, },
  ];

const KesehatanJiwa = () => {
  return (
    <div className="kesehatan-jiwa">
        <ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 35,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={-35} textAnchor='end' fontSize={12} fontWeight='bold' />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" name='Total' fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default KesehatanJiwa