document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM loaded")
    modifyText( )

});



function modifyText( ){
    const text = document.getElementById("text")
    text.textContent = "This is really cool!"
}