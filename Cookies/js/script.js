"use strict"

function guardar() {
    const inputClave = document.getElementById("nombre");
    const inputValor = document.getElementById("apellido");
    saveCookie(inputClave.value,inputValor.value);
    getCookie(inputClave.value);
}

function saveCookie(clave,valor) {
    let expiraCookie = 1*60*1000;
    let date = new Date();
    let current = date.getTime();
    let caducidad = current + expiraCookie;
    date.setTime(caducidad); 
    document.cookie = clave + "=" + valor + ";expires=" + date.toUTCString()+ ";path=./;SameSite=Strict;Secure";
    console.log(document.cookie);
}


