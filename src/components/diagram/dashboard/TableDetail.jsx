import { Box } from "@mui/material"
import { DataGrid, GridToolbar, disableVirtualization } from "@mui/x-data-grid"
import { columns, rows } from "../../datatable/tableDetail"

const TableDetail = () => {
  return (
    <div className="table-detail">
      <Box sx={{ width: '100%', height: 400 }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar, }}
            disableVirtualization
            />
        </Box>
    </div>
  )
}

export default TableDetail