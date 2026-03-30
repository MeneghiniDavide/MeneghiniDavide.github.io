function inizializzaParagrafi(){
    //lista in cui vengono inseriti TUTTI gli elementi di classe titolo
    let titoli = document.querySelectorAll(".titolo");

    //per ogni elemento
    for(let i=0;i<titoli.length; i++){
        //aggiunge un evento legato al click del mouse
        titoli[i].addEventListener("click", gestisciClickTitolo);
    }
}

function gestisciClickTitolo(){
    //prende il prossimo elemento nel DOM rispetto a quello che clicco e lo metto in "contenuto"
    let contenuto = this.nextElementSibling;

    //se il contenuto è nel selettore .visible vai al selettore senza .visible
    if(contenuto.classList.contains("visible")){
        contenuto.classList.remove("visible");
    }else{
        //altrimenti prendo tutti gli oggetti di .contenuto
        let tuttiIContenuti = document.querySelectorAll(".contenuto");
        //li rendo tutti invisibili (chiudo tutti i paragrafi)
        for(let i=0;i<tuttiIContenuti.length; i++){
            tuttiIContenuti[i].classList.remove("visible");
        }
        //rende il contenuto cliccato visibile
        contenuto.classList.add("visible");

    }
}


//chiamo le funzioni dopo che il DOM ha aricato la pagina
document.addEventListener("DOMContentLoaded", inizializzaParagrafi);