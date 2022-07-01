import { PieChart, Legend, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'S1 Profesi', value: 210 },
	{ name: 'Diploma IV', value: 100 },
	{ name: 'Diploma III', value: 90 },
	{ name: 'SLTA', value: 75 },
	{ name: 'S2', value: 75 },
	{ name: 'SPK', value: 60 },
	{ name: 'NERS', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
      </text>
  );
};
const Education = () => {
  return (
    <div className='education'>
        <ResponsiveContainer width="99%" height={300}>
				<PieChart width={300} height={300}>
					<Legend layout="horizontal" verticalAlign="bottom" align="center" />
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={130}
						fill="#8884d8"
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
    </div>
  )
}

export default Education