function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}
// function myfunction(){
//     document.getElementById("demo").innerHTML="Create an Account";
// }