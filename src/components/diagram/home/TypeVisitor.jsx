import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { dataTypeVisitor } from '../../datatable/home/typeVisitor';


const TypeVisitor = () => {
  return (
    <div className='typevisitor'>
      <ResponsiveContainer width="99%" height={400}>
        <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataTypeVisitor}
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
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text x={x} y={y} fill="#616161" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" >
                  {dataTypeVisitor[index].name} ({value})
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