let tbody = document.querySelector("#transactionTable");

fetch("example.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = item.date;
      let td2 = document.createElement("td");
      td2.innerHTML = item.transaction;
      let td3 = document.createElement("td");
      td3.innerHTML = item.fullname;
      let td4 = document.createElement("td");
      td4.innerHTML = item.description;
      tbody.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
    });
  });
