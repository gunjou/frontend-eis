import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "../../datatable/tableDetail"

const TableDetail = () => {
  return (
    <div className="table-detail">
      <Box sx={{ minWidth: 650, width: '99%', height: 400 }} >
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar, }}
            />
        </Box>
    </div>
  )
}

export default TableDetail