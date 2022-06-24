export const columns = [
    { field: 'id', headerName: 'Kelas', width: 200 },
    {
      field: 'jumlah',
      headerName: 'Jumlah',
      type: 'number',
      width: 115,
      editable: true,
    },
    {
      field: 'terpakai',
      headerName: 'Terpakai',
      type: 'number',
      width: 115,
      editable: true,
    },
    {
      field: 'kosong',
      headerName: 'Kosong',
      type: 'number',
      width: 115,
      valueGetter: (params) =>
        `${params.row.jumlah - params.row.terpakai}`,
    },
];

export const rows = [
{ id: 'Kelas I', jumlah: 30, terpakai: 15 },
{ id: 'Kelas II', jumlah: 34, terpakai: 15 },
{ id: 'Kelas III', jumlah: 33, terpakai: 15 },
{ id: 'Kelas Utama', jumlah: 38, terpakai: 15 },
{ id: 'Kelas Isolasi', jumlah: 28, terpakai: 15 },
{ id: 'Non Kelas', jumlah: 34, terpakai: 15 },
];