//script per la barra di navigazione che scompare e compare in base allo scroll----------------------------------------------
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
    // Se scendo, aggiungo la classe per nascondere
    navbar.classList.add('nav-hidden');
    } else {
    // Se salgo, rimuovo la classe per mostrare
    navbar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});


function cambiaPrezzo1(){
    let quantita = document.getElementById("inputMouse").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputMouse").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputMouse").value = 0;
    } else{
        let prezzoTotale = quantita*16;
        document.getElementById("costoTotaleMouse").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo2(){
    let quantita = document.getElementById("inputTastiera").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputTastiera").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputTastiera").value = 0;
    } else{
        let prezzoTotale = quantita*25;
        document.getElementById("costoTotaleTastiera").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo3(){
    let quantita = document.getElementById("inputStampante").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputStampante").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputStampante").value = 0;
    } else{
        let prezzoTotale = quantita*350;
        document.getElementById("costoTotaleStampante").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo4(){
    let quantita = document.getElementById("inputScanner").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputScanner").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputScanner").value = 0;
    } else{
        let prezzoTotale = quantita*200;
        document.getElementById("costoTotaleScanner").innerHTML = prezzoTotale;
    }
}

function elaboraOrdine(){

    
    let p1 = parseFloat(document.getElementById("costoTotaleMouse").innerText) || 0;
    let p2 = parseFloat(document.getElementById("costoTotaleTastiera").innerText) || 0;
    let p3 = parseFloat(document.getElementById("costoTotaleStampante").innerText) || 0;
    let p4 = parseFloat(document.getElementById("costoTotaleScanner").innerText) || 0;
    let prezzoTotale = p1+p2+p3+p4;
    document.getElementById("costoTotale").innerHTML = prezzoTotale;
}

function visualizzaStringaFinale(){
    let email = document.getElementById("email").value;
    let pagamento = document.getElementById("menuPagamento").value;
    let prezzo = document.getElementById("costoTotale").value;

    document.getElementById("stringaFinale").innerHTML = "Grazie per il suo ordine di " + prezzo + "€, il pagamento avverrà tramite " + pagamento + ". Riceverà notifiche all’indirizzo " + email;

}