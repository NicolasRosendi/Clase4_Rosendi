alert("Buenos días, soy su asistente de google personal");
let usuario = prompt("Ingrese su nombre de usuario");
var usuarioc = usuario;
alert("¿En qué lo puedo ayudar:" + " " + usuarioc + "?");

function asistente(principal) {
    principal = prompt("Diga un comando o utilize 'HELP' para conocerlos").toUpperCase();
switch (principal) {
    case "HELP":
        alert("Los comandos son 'ESC', 'CALCULADORA' y 'RR'")
        return asistente();
    case "ESC":
        alert("Adios" + " " + usuarioc + ", que tenga un buen día");
        break
        ;
    case "CALCULADORA":
        calc();
    case "RR":
        alert("Never gonna give you up, never gonna let you down, never gonna run around and desert you...")
        return asistente();


    default:
        alert("Error, comando:" + " " + "'" + principal + "'" + " " + "No reconocido")
        return asistente();
        ;
}
    
} {
    
}
asistente();

function calc(cuenta, n1, n2, operacion) {
    operacion = prompt("elija '+' para suma, '-' para resta, '*' para multiplicar, o '/' para dividir. También puede utilizar 'ESC' para salir de la calculadora").toUpperCase();
    switch (operacion) {
        case "+":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 + n2;
            alert(cuenta)
            return calc();
        case "ESC":
            return asistente();
        case "-":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 - n2;
            alert(cuenta)
            return calc();
        case "*":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));
            cuenta = n1 * n2;
            alert(cuenta)
            return calc();
        case "/":
            n1 = parseInt(prompt("Primer número"));
            n2 = parseInt(prompt("Segundo número"));                
            cuenta = n1 / n2;
            alert(cuenta)
            return calc();                
    
        default:
        alert("Error, comando:" + " " + "'" + operacion + "'" + " " + "No reconocido");
            return calc();
    }
}