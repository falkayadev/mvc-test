function filterTransactionsByDateRange() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const transactionDate = new Date(
      row.querySelector("td:first-child").textContent
    );

    if (transactionDate >= startDate && transactionDate <= endDate) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
