"use strict"

function guard() {
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

var cookiePair = [];
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
        for(var i = 0; i < cookieArr.length; i++) {
            cookiePair = cookieArr[i].split("=");
           mostrar() 
        }

}
function mostrar() {
    for (let i = 0; i < cookiePair.length; i+2) {
        let div = document.createElement('div');
        if ((i%2) == 0) {
            div.className = 'row mt-4'
        }
        div.className = 'col-md';
        div.innerHTML = '<p>'+cookiePair[i]+'</p>';
        document.body.appendChild(div);
    }
}
