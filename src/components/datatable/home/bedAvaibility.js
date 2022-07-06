export const columns = [
    { field: 'id', headerName: 'Kelas', width: 200 },
    {
      field: 'bed',
      headerName: 'Bed',
      type: 'number',
      width: 115,
      editable: true,
    },
    {
      field: 'terisi',
      headerName: 'Terisi',
      type: 'number',
      width: 115,
      editable: true,
    },
    {
      field: 'tersedia',
      headerName: 'Tersedia',
      type: 'number',
      width: 115,
      valueGetter: (params) =>
        `${params.row.bed - params.row.terisi}`,
    },
];

export const rows = [
{ id: 'Kelas I', bed: 30, terisi: 11 },
{ id: 'Kelas II', bed: 40, terisi: 15 },
{ id: 'Kelas III', bed: 70, terisi: 34 },
{ id: 'VIP Standar', bed: 40, terisi: 20 },
{ id: 'VIP Madya', bed: 25, terisi: 6 },
{ id: 'VIP Utama', bed: 36, terisi: 9 },
{ id: 'VIP Super', bed: 38, terisi: 11 },
{ id: 'Intensif', bed: 32, terisi: 10 },
];