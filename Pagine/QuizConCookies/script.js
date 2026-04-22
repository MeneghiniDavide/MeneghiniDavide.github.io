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

//script del quiz------------------------------------------------------------------------------------------------------------

const risposte = ["SQL", "3", "Dinamiche", ["1","3"], "byte"];
let punti = 0;
let valoriSelezionati = [];

function salvaDati1(){
    let risposta1 = document.querySelector("#Risposta1").value.trim().toUpperCase();
    setCookie("Risposta 1", risposta1, 1);
    window.location.href = "domanda2.html";
}

function salvaDati2(){
    let risposta2 = document.querySelector("#Risposta2").value;
    setCookie("Risposta 2", risposta2, 1);
    window.location.href = "domanda3.html";
}

function salvaDati3(){
    let risposta3 = document.querySelector('input[name="risposta3"]:checked').value;
    setCookie("Risposta 3", risposta3, 1);
    window.location.href = "domanda4.html";
}

function salvaDati4(){
    let checkboxes = document.querySelectorAll(".risposta4:checked");
    let valoriSelezionati = [];
    for(let i=0;i<checkboxes.length;i++){
        valoriSelezionati.push(checkboxes[i].value);
    }
    let str = valoriSelezionati.join(";");
    setCookie("Risposta 4", str, 1);
    window.location.href = "domanda5.html";
}

function salvaDati5(){
    let risposta5 = document.querySelector("#Risposta5").value.trim().toLowerCase();
    setCookie("Risposta 5", risposta5, 1);
    window.location.href = "risultati.html";
}



function setCookie(nome, valore, giorni){
    let data = new Date();
    data.setTime(data.getTime() + (giorni*24*60*60*1000))//trasformo igiorni in millisecondi

    document.cookie = nome + /*prende il nome*/
                      "=" + 
                      encodeURIComponent(valore)/*trasforma il valore in un formato valido per i cookie*/ + 
                      ";expires=" + 
                      data.toUTCString() + 
                      ";path=/";
}

function getCookie(nome){
    let cookies=document.cookie.split(";");
    for(let i=0;i<cookies.length; i++){
        let c = cookies[i].trim();
        if(c.startsWith(nome+"=")){
            return decodeURIComponent(c.substring(nome.length+1));
        }
    }
    return "";
}


function caricaRiepilogo(){
    let r1 = getCookie("Risposta 1");
    let r2 = getCookie("Risposta 2");
    let r3 = getCookie("Risposta 3");
    let r4 = getCookie("Risposta 4");
    let r5 = getCookie("Risposta 5");

    let s="";
    
    if(r1 === risposte[0]){
        punti++;
        s+="Risposta 1: Corretta. ";
        s+= "<br>";
    }else{
        s+="Risposta 1: Errata. ";
        s+= "<br>";
    }

    if(r2 === risposte[1]){
        punti++;
        s+="Risposta 2: Corretta. ";
        s+= "<br>";
    }else{
        s+="Risposta 2: Errata. ";
        s+= "<br>";
    }

    if(r3 === risposte[2]){
        punti++;
        s+="Risposta 3: Corretta. ";
        s+= "<br>";
    }else{
        s+="Risposta 3: Errata. ";
        s+= "<br>";
    }

    if(vettoreRisposte === "1;3"){
        punti++;
        s+="Risposta 4: Corretta. ";
        s+= "<br>";
    }else{
        s+="Risposta 4: Errata. ";
        s+= "<br>";
    }

    if(r5 === risposte[4]){
        punti++;
        s+="Risposta 5: Corretta. ";
        s+= "<br>";
    }else{
        s+="Risposta 5: Errata. ";
        s+= "<br>";
    }

    s+="<br> PUNTEGGIO: " + punti + "/5";

    document.getElementById("riepilogo").innerHTML = s;
}