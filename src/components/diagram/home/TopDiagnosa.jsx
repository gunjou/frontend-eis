import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import { dataTopDiagnosa } from '../../datatable/home/topDiagnosa';


const TopDiagnosa = () => {
  return (
    <div className='top-diagnosa'>
      <ResponsiveContainer width="99%" height={500}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={dataTopDiagnosa}
          margin={{top: 20, right: 20, bottom: 20, left: 20, }}
          className='text-[12px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="total" barSize={25} fill="#4C785D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopDiagnosa