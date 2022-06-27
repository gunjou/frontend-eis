import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 800, fill: '#24635A'},
  { name: 'Group B', value: 300, fill: "#8DFCEC" },
  { name: 'Group C', value: 300, fill: "#51AFA1" },
  { name: 'Group D', value: 200, fill: "#C0FCF3" },
  { name: 'Group E', value: 278, fill: "#397D73" },
];

const MedicalRecord1 = () => {
  return (
    <div className="medical-record1">
        <ResponsiveContainer width="99%" height={250}>
        <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index
            }) => {
              console.log("handling label?");
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
              return (
                <text
                  x={x}
                  y={y}
                  fill="#616161"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data01[index].name} ({value})
                </text>
              );
            }}
            />
            
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MedicalRecord1