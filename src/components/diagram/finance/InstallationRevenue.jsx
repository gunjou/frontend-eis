import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'No', width: 90, },
	{
		field: 'namaInstalasi',
		headerName: 'Nama Instalasi',
		width: 800,
	},
	{
		field: 'jumlah',
		headerName: 'Jumlah',
		width: 250,
		type: 'money',
	},
];

const rows = [
	{ id: 1, namaInstalasi: 'Instalasi Farmasi', jumlah: 'Rp.16,725,000.00' },
	{ id: 2, namaInstalasi: 'Instalasi Gawat Darurat', jumlah: 'Rp.6,245,000.00' },
	{ id: 3, namaInstalasi: 'Instalasi Laboratorium', jumlah: 'Rp.2,757,700.00' },
	{ id: 4, namaInstalasi: 'Instalasi Rawat Jalan', jumlah: 'Rp.17,725,000.00' },
	{ id: 5, namaInstalasi: 'Instalasi Rawat Inap', jumlah: 'Rp.7,069,900.00' },
	{ id: 6, namaInstalasi: 'Instalasi Pemulasaran Jenazah', jumlah: 'Rp.200,000.00' },
	{ id: 7, namaInstalasi: 'Instalasi Radiologi', jumlah: 'Rp.4,005,000.00' },
	{ id: 8, namaInstalasi: 'Instalasi Bedah Sentral dan Ruang Rawat Sehari', jumlah: 'Rp.250,000.00' },
	{ id: 9, namaInstalasi: 'Instalasi Ambulance', jumlah: 'Rp.150,000.00' },
];


const InstallationRevenue = () => {
	return (
		<div className="installation-revenue">
			<Box sx={{ height: 400, width: '100%', paddingLeft: 1.5 }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					// checkboxSelection
					// disableSelectionOnClick
				/>
			</Box>
		</div>
	)
}

export default InstallationRevenue