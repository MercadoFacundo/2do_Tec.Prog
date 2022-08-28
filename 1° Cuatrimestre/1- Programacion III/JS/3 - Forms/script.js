function login(){
    var usuario = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (usuario=="pepe" && password=="argento"){
        alert("Usuario Correcto");
        window.location.replace("http://www.google.com.ar");
    }else{
        alert("Error en Credenciales");
        document.getElementById("user").value="";
        document.getElementById("pass").value="";
    }
}