function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("myInput1");
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
    if(y.type === "password"){
        y.type="text";
    }
    else{
        y.type = "password";
    }
}
// function myfunction(){
//     document.getElementById("demo").innerHTML="Create an Account";
// }