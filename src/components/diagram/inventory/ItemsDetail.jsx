import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { allItemRows, itemColumns } from "components/datatable/inventory/dataItems";


const ItemsDetail = () => {
  return <div className="items-detail">
    <Box sx={{ height: 650, width: '99%' }}>
      <DataGrid
        rows={allItemRows}
        columns={itemColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  </div>;
};

export default ItemsDetail;
