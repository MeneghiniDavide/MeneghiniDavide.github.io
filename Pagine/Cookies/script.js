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


//script dei cookies ----------------------------------------------------------------------------------------------------------
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

function salvaDati(){
    //prende i dati da pagina1
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    setCookie("nome", nome, 1);
    setCookie("cognome", cognome, 1);

    //si sposta in pagina2
    window.location.href = "pagina2.html";
}

function caricaRiepilogo(){
    let nome = getCookie("nome");
    let cognome = getCookie("cognome");
    let s="";
    s+="Nome: " + nome + " ";
    s+= "<br>";
    s+="Cognome: " + cognome + " ";
    document.getElementById("riepilogo").innerHTML = s;
}