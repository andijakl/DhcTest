$(document).ready(function () {
    console.log("Document ready");

    $("#textform").submit(function() {
        const entered = $("usertext").val();
        console.log("Form submitted - entered text: " + entered);
    })
})