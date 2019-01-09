$(document).ready(function () {
    console.log("Document ready");

    var socket = io();

    $("#textform").submit(function(e) {
        // Get the user entered text
        const enteredText = $("#usertext").val();
        console.log("Form submitted - entered text: " + enteredText);
        
        // Send the message to the server via socket.io
        socket.emit('UserInput', enteredText);

        e.preventDefault();
    })
})