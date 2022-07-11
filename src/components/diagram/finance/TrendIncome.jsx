import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const DataFormater = (number) => {
  if(number > 1000000000){
    return (number/1000000000).toString() + 'B';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'M';
  }else if(number > 1000){
    return (number/1000).toString() + 'K';
  }else{
    return number.toString();
  }
}

const data = [
	{ month: 'Januari', total: 14202882, },
	{ month: 'Februari', total: 20146509, },
	{ month: 'Maret', total: 35771764, },
	{ month: 'April', total: 39601230, },
	{ month: 'Mei', total: 59311801, },
	{ month: 'Juni', total: 74876029, },
	{ month: 'Juli', total: 68862412, },
	{ month: 'Agustus', total: 55819624, },
	{ month: 'September', total: 64491394, },
	{ month: 'Oktober', total: 63092388, },
	{ month: 'November', total: 76606814, },
	{ month: 'Desember', total: 77912981, },
];

const TrendIncome = () => {
	return (
		<div className="trend-income">
			<ResponsiveContainer width="99%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="total" name='Total' stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={1.5} />
          {/* <Line type="monotone" dataKey="total" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
		</div>
	)
}

export default TrendIncome