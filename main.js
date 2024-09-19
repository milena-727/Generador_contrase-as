let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contraseña");
let limpiar = document.getElementById("limpiar")

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@.-_#$%/()=?^&*";


//Boton generar contraseña
function generar(){

    //parseINT convierte de string a número
    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }
    
    let password = " ";
//Inicializador, condición, contador o salto i++
    for(let i = 0; i < numeroDigitado; i++){
        //Math.random es para caracteres aleatorios
        //Math.floor() redondea el número hacia abajo, para que sea un entero
        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        
        //+= concatena y asigna cada caracter al password
        password+=caracterAleatorio;


    }
    contraseña.value = password;
    validar_contraseña()
}


//Boton limpiar
limpiar.addEventListener("click", function(){
    contraseña.value = " ";
    cantidad.value = " ";
})


function validar_contraseña(){
    // Expresiones regulares para validar diferentes aspectos
    const tieneNumero = /\d/;                // Verifica si tiene al menos un número
    const tieneMayuscula = /[A-Z]/;          // Verifica si tiene al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/;          // Verifica si tiene al menos una letra minúscula
    const tieneCaracterEspecial = /[!@#$%^&*]/; // Verifica si tiene al menos un caracter especial (punto, coma, etc.)
    const tieneLongitud = contraseña.value.length >= 8;  // Verifica que la longitud sea al menos 8 caracteres

    // Validación de la fortaleza de la contraseña
    if (!tieneNumero.test(contraseña.value)) {
        alert("La contraseña debe contener al menos un número");
        return;
        
    } else if (!tieneMayuscula.test(contraseña.value)) {
        alert("La contraseña debe contener al menos una letra mayúscula");
        return;
        
    } else if (!tieneMinuscula.test(contraseña.value)) {
        alert("La contraseña debe contener al menos una letra minúscula");
        return;
        
    }else if (!tieneCaracterEspecial.test(contraseña.value)) {
        alert("La contraseña debe contener al menos un caracter especial");
        return;

    } else if (!tieneLongitud) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    } else {
        alert("La contraseña es segura.");
        return;
        
    }
}





