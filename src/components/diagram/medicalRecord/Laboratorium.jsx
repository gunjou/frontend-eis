import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Kimia', total: 3440, },
    { name: 'Gula Darah', total: 2991, },
    { name: 'Hematologi', total: 3299, },
    { name: 'Serologi', total: 1689, },
    { name: 'Bakteriologi', total: 165, },
    { name: 'Liquor', total: 0, },
    { name: 'Transudat/Exsudat', total: 0, },
    { name: 'Urine', total: 408, },
    { name: 'Tinja', total: 26, },
    { name: 'Gas Darah', total: 32, },
    { name: 'Radio Assay', total: 0, },
    { name: 'Cairan Otak', total: 0, },
    { name: 'Cairan Tubuh', total: 0, },
    { name: 'Imonologi', total: 100, },
    { name: 'Mikrobiologi', total: 0, },
    { name: 'Lainnya/Napsa', total: 2279, },
  ];

const Laboratorium = () => {
  return (
    <div className="laboratorium">
        <ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 42,
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

export default Laboratorium