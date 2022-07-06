import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer, } from 'recharts';
import { dataTrendVisitor } from '../../datatable/home/trendVisitor';


const TrendVisitor = () => {
  return (
    <div className="trend-visitors">
      <ResponsiveContainer width={"99%"} height={500}>
      <ComposedChart
          width={500}
          height={400}
          data={dataTrendVisitor}
          margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} />
          <Legend />
          <Bar dataKey="total" name='Total Terdaftar' barSize={50} fill="#4099CC" />
          <Area dataKey="diperiksa" name='Sudah Diperiksa' type="monotone" fill="#2BCC4B" stroke="#2BCC4B" fillOpacity={0.15} />
          <Line dataKey="belum" name='Belum Diperiksa' type="monotone" stroke="#ff7300" />
          <Scatter dataKey="batal" name='Batal Registrasi' fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendVisitor