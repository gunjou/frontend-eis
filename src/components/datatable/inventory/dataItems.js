export const itemColumns = [
    { field: "id", headerName: "ID", width: 60, },
    { field: "itemName", headerName: "Item Name", width: 400, editable: true, },
    { field: "itemType", headerName: "Item Type", width: 120, editable: true, },
    { field: "unitType", headerName: "Unit Type", width: 120, editable: true, },
    { field: "qty", headerName: "Qty", type: "number", width: 90, editable: true, },
    { field: "price", headerName: "Price (IDR)", type: "number", width: 150, editable: true, },
    { field: "totalCost", headerName: "Total Cost", type: "number", width: 200, editable: true, },
    { field: "date", headerName: "Date", width: 110, editable: true, },
    { field: "status", headerName: "Status", width: 110, editable: true, },
  ];
  
  export const allItemRows = [
    { id: 1, itemName: "RINGER LACTAT 500 ML INF*", itemType: "Obat", unitType: "BOTOL", qty: 22498, price: 8670, totalCost: 189768960, date: "2022-07-06", status: 'optimal' },
    { id: 2, itemName: "OMEPRAZOLE 40 MG INJ - OGB DEXA (E-CAT)", itemType: "Obat", unitType: "VIAL", qty: 7850, price: 11249, totalCost: 85154930, date: "2022-07-06", status: 'optimal' },
    { id: 3, itemName: "LEVOFLOXACIN 500 MG INFUS MBF", itemType: "Obat", unitType: "BOTOL", qty: 20045, price: 23980, totalCost: 480007660, date: "2022-07-06", status: 'optimal' },
    { id: 4, itemName: "ONDANSETRON IV/IM 4 MG*", itemType: "Obat", unitType: "AMPUL", qty: 0, price: 1338, totalCost: 0, date: "2022-07-06", status: 'optimal' },
    { id: 5, itemName: "kertas ekg 63 mm x 100mm x 300 lembar 14", itemType: "BHP", unitType: "LEMBAR", qty: 2, price: 112000, totalCost: 224000, date: "2022-07-06", status: 'understock' },
    { id: 6, itemName: "kertas ekg 63 x 30 roll 27", itemType: "BHP", unitType: "ROLL", qty: 12, price: 138600, totalCost: 1663200, date: "2022-07-06", status: 'understock' },
    { id: 7, itemName: "CHANNA 500MG (KIMIA FARMA)", itemType: "Obat", unitType: "KAPSUL", qty: 22929, price: 7563, totalCost: 170152374, date: "2022-07-06", status: 'overstock' },
    { id: 8, itemName: "LEVOFLOXACIN 750 MG/150 ML INF *BTT", itemType: "Obat", unitType: "SOF", qty: 880, price: 92813, totalCost: 72951018, date: "2022-07-06", status: 'optimal' },
    { id: 9, itemName: "CEFTAZIDIM INJEKSI 1 G INJ (E-CAT)", itemType: "Obat", unitType: "VIAL", qty: 40077, price: 21325, totalCost: 854300825, date: "2022-07-06", status: 'optimal' },
    { id: 10, itemName: "kertas ekg 145mm x 150mm x 400 lembar", itemType: "BHP", unitType: "LEMBAR", qty: 0, price: 391000, totalCost: 0, date: "2022-07-06", status: 'optimal' },
  ];