import { Box } from "@mui/material"
import { DataGrid, GridToolbar, } from "@mui/x-data-grid"
import { columns, rowsTetap, rowsTidakTetap, rowsSemua } from "../../../datatable/humanResource/tableDetail";


const DataPegawai = ({param}) => {
	let data;
	switch (param) {
		case "pegawai":
			data = { title: "Pegawai", rows: rowsSemua }; break;
		case "tetap":
			data = { title: "Tetap", rows: rowsTetap }; break;
		case "tidak-tetap":
			data = { title: "Tidak Tetap", rows: rowsTidakTetap }; break;
		default:
			break;
	}

	return (
    <div className="table-detail">
      <Box sx={{ width: '100%', height: 400 }}>
				<DataGrid
				rows={data.rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				components={{ Toolbar: GridToolbar, }}
				disableVirtualization
				checkboxSelection
            />
        </Box>
    </div>
	)
}


const DetailPegawai = () => {

	const data = [
		{ id: "pegawai", title: "Semua Pegawai", },
		{ id: "tetap", title: "Pegawai Tetap", },
		{ id: "tidak-tetap", title: "Pegawai Tidak Tetap", },
	]

	return (
		<div className="all-modal">
			{data.map((data) => (
				<div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/50"
					id={data.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog relative pointer-events-none w-full max-w-7xl h-full">
						<div
							className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
							<div
								className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
								<h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{data.title}</h5>
								<button type="button"
									className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
									data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body p-4">
								<DataPegawai param={data.id} />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default DetailPegawai