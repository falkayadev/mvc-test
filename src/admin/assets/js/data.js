const columnDefs = [
  {
    field: "date",
    filter: "agDateColumnFilter",
    cellStyle: { "text-align": "right" },
  },
  {
    field: "transaction",
    cellStyle: (params) => {
      const style = {
        backgroundColor: "",
        color: "white",
        "text-align": "right",
      };
      style.backgroundColor = params.data.transferType ? "#34d399" : "#f87171";
      return style;
    },
  },
  {
    field: "fullname",
    headerName: "Sender/Receiver",
  },
  { field: "description", flex: 1 },
];

// specify the data
const rowData = [];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  defaultColDef: { sortable: true, resizable: false },
  pagination: true,
  paginationPageSize: 10,
  domLayout: "autoHeight",
};

function onBtnExport() {
  gridOptions.api.exportDataAsCsv();
}

function onFilterTextBoxChanged() {
  gridOptions.api.setQuickFilter(
    document.getElementById("filter-text-box").value,
  );
}

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});

fetch(
  "https://api.json-generator.com/templates/r4ZsMJoGuIgc/data?access_token=r7asyacfzl3lx5587xcss47027v9ymvbpd8idrux",
)
  .then((response) => response.json())
  .then((data) => {
    // load fetched data into grid
    gridOptions.api.setRowData(data);
  });
