import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400, fill: '#57c028'},
  { name: 'Group B', value: 300, fill: "#57c048" },
  { name: 'Group C', value: 300, fill: "#57c068" },
  { name: 'Group D', value: 200, fill: "#57c088" },
  { name: 'Group E', value: 278, fill: "#57c0a8" },
  { name: 'Group F', value: 189, fill: "#57c0b8" },
];

const TypeVisitor = () => {
  return (
    <div className='typevisitor'>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={130}
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
                  fill="#000"
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

export default TypeVisitor