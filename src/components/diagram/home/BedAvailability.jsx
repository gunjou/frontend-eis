import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { columns, rows } from "../../datatable/home/bedAvaibility"


const BedAvailability = () => {
  return (
      <div className="table-bed-available">
        <Box sx={{ height: 380, width: '99%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            />
        </Box>          
      </div>
  )
}

export default BedAvailability