$(document).ready( function () {
    $('#myTable').DataTable({
        paging:true,
        responsive: {
            breakpoints: [
              {name: 'bigdesktop', width: Infinity},
              {name: 'meddesktop', width: 1480},
              {name: 'smalldesktop', width: 1280},
              {name: 'medium', width: 1188},
              {name: 'tabletl', width: 1024},
              {name: 'btwtabllandp', width: 848},
              {name: 'tabletp', width: 768},
              {name: 'mobilel', width: 480},
              {name: 'mobilep', width: 320}
            ]
          }
    });
} );