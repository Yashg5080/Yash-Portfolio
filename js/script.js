console.log("This is included")
function myFunction() {
    if(document.getElementById("left").style.display=="none")
        document.getElementById("left").style.display = "flex";
    else
    document.getElementById("left").style.display = "none";    
}