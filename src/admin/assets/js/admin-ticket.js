$(document).ready( function () {
    $('#myTable').DataTable({
        paging:true,
        responsive:true,
    });
} );

const triggers = document.querySelectorAll('.trigger-chat');
const chatbox = document.querySelector('#supChatBox');

triggers.forEach(function(trigger) {

    trigger.addEventListener('click', function() {
        chatbox.classList.toggle('hidden');
    });

});