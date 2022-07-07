import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const data = [
  { name: 'Persalinan Normal', total: 20, },
  { name: 'Pers.dg komplikasi', total: 8, },
  { name: 'Perd.sbl persalinan', total: 21, },
  { name: 'Perd.sdh persalinan', total: 18, },
  { name: 'Pre Eclampsi', total: 6, },
  { name: 'Eclampsi', total: 5, },
  { name: 'Infeksi', total: 3, },
  { name: 'Sectio caesaria', total: 18, },
  { name: 'Abortus ', total: 5, },
  { name: 'Lain-lain', total: 6, },
];

const Midwifery = () => {
  return (
    <div className="midwifery">
        <ResponsiveContainer width="99%" height={350}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          // margin={{top: 20, right: 20, bottom: 20, left: 20, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip />
          <Bar dataKey="total" name='Total' barSize={15} fill="#4C785D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Midwifery