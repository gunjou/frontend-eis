import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const data = [
	{ name: 'SIMRS', total: 3 },
	{ name: 'PELAKSANA', total: 5 },
	{ name: 'Ahli Gizi', total: 12 },
	{ name: 'Terapis', total: 10 },
	{ name: 'Laboratorium', total: 8 },
	{ name: 'Nutrisionis', total: 7 },
	{ name: 'Radiografer', total: 5 },
	{ name: 'Kasir', total: 10 },
	{ name: 'Perekam Medis', total: 4 },
	{ name: 'Apoteker', total: 15 },
	{ name: 'BIDAN', total: 14 },
	{ name: 'DOKTER', total: 25 },
	{ name: 'PERAWAT', total: 30 },
	{ name: 'Administrasi', total: 10 },
];

function CustomBarLabel(props) {
  const { x, y, width, value } = props;
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

const CategoryEmployee = () => {
	return (
		<div className='category-employee'>
			<ResponsiveContainer width="99%" height={300}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
					className='text-xs'
				>
					<XAxis dataKey="name" interval={0} />
					<Tooltip />
					<Bar dataKey="total" name='Total' barSize={50} fill="#4C785D" label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default CategoryEmployee