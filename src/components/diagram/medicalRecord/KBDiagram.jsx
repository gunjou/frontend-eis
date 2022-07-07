import { PieChart, Legend, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'IUD', value: 11 },
	{ name: 'Pil', value: 4 },
	{ name: 'Kondom', value: 1 },
	{ name: 'Obat Vaginal', value: 1 },
	{ name: 'MO Pria', value: 2 },
	{ name: 'MO Wanita', value: 3 },
	{ name: 'Suntikan', value: 6 },
	{ name: 'Implan', value: 5 },
];

const COLORS = ['#8D8DAA', '#6262B9', '#F56D91', '#FF8042']

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
const KBDiagram = () => {
  return (
    <div className="keluarga-berencana">
        <ResponsiveContainer width="99%" height={340}>
				<PieChart width={300} height={300}>
					<Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{fontSize: "12px"}} />
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
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
    </div>
  )
}

export default KBDiagram