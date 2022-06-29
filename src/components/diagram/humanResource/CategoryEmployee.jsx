import { PieChart, Legend, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Apoteker', value: 400 },
	{ name: 'Administrasi', value: 500 },
	{ name: 'Bidan', value: 300 },
	{ name: 'Dokter', value: 200 },
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

const CategoryEmployee = () => {
	return (
		<div className='category-employee'>
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

export default CategoryEmployee