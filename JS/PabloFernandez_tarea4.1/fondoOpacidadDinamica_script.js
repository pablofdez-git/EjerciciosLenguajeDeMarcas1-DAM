//Recoger los valores de los atributos
const password = document.getElementById("password");
const fondo = document.getElementById("fondo");
const container = document.querySelector(".login-container");

//Ejecutar cuando se introduzca una tecla
password.addEventListener('input', function(){
    const long = this.value.length;             //Obtener la longitud
    const blur = Math.abs(long - 10) * 2;       //Formula para los pixeles, el abs es para tener siempre positivo el valor

    fondo.style.filter = `blur(${blur}px)`;     //Modifica el css del borde con el valor de pixeles de blur

    //Segun la longitud cambiara de color el borde
    if(long === 10){
        container.style.borderColor = "#6bcb77";
    }else if(long >= 7 || long <= 13){
        container.style.borderColor = "#ffd93d";
    }else{
        container.style.borderColor = "#ff6b6b";
    }

});
