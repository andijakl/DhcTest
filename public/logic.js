$(document).ready(function () {
    console.log("Document ready");

    $("#textform").submit(function(e) {
        const enteredText = $("#usertext").val();
        console.log("Form submitted - entered text: " + enteredText);
        
        e.preventDefault();
    })
})