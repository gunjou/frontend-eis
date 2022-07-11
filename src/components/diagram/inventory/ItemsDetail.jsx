// @ts-nocheck
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { allItemRows } from "components/datatable/inventory/dataItems";
import * as React from "react";

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

function GetStatus(proops) {
  if (proops === 'understock') {
    return(<div className=" text-center rounded text-white bg-[#A6AB00]">understock</div>)
    // fill = '#A6AB00'
  } else if (proops === 'overstock') {
    return(<div className=" text-center rounded text-white bg-[#F78983]">overstock</div>)
    // fill = '#F78983'
  } else {
    return(<div className=" text-center rounded text-white bg-[#7AAB6C]">optimal</div>)
  }
}


const ItemsDetail = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="items-detail">
      <Paper sx={{ width: "99%", overflow: "hidden" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Item Name</TableCell>
                <TableCell className="tableCell">Item Type</TableCell>
                <TableCell className="tableCell">Unit Type</TableCell>
                <TableCell className="tableCell" align="right">
                  Qty
                </TableCell>
                <TableCell className="tableCell" align="right">
                  Price (IDR)
                </TableCell>
                <TableCell className="tableCell" align="right">
                  Total Cost
                </TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allItemRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id} </TableCell>
                    <TableCell className="tableCell">{row.itemName}</TableCell>
                    <TableCell className="tableCell">{row.itemType}</TableCell>
                    <TableCell className="tableCell">{row.unitType}</TableCell>
                    <TableCell className="tableCell" align="right">{row.qty}</TableCell>
                    <TableCell className="tableCell" align="right">{formatter.format(row.price)}</TableCell>
                    <TableCell className="tableCell" align="right">{formatter.format(row.totalCost)}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="">
                      {/* <div className=" text-center text-white rounded bg-red-700">{row.status}</div> */}
                      {GetStatus(row.status)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allItemRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ItemsDetail;

// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import { allItemRows, itemColumns } from "components/datatable/inventory/dataItems";

// const ItemsDetail = () => {
//   return <div className="items-detail">
//     <Box sx={{ height: 650, width: '99%' }} >
//       <DataGrid
//         rows={allItemRows}
//         columns={itemColumns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//         checkboxSelection
//         disableSelectionOnClick

//       />
//     </Box>
//   </div>;
// };

// export default ItemsDetail;
