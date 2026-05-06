citta = ["Milano","Bergamo","Brescia","Como","Cremona","Lecco","Lodi","Mantova","Monza","Pavia","Sondrio","Varese"];
mesi = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giunio","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre",];

function continua1(){

    let nome = document.getElementById("txtNome").value.trim();
    let cognome = document.getElementById("txtCognome").value.trim();

    if(nome === ""){
        alert("Inserire il nome!");
        return;
    }
    if(cognome === ""){
        alert("Inserire il cognome!");
        return;
    }
    if(cognome.length<3){
        alert("cognome non valido: minore di 3 caratteri");
        return;
    }
    if(nome[0]<'A' || nome[0]>'Z'){
        alert("nome non valido: prima lettera minuscola");
        return;
    }
    if(cognome[0]<'A' || cognome[0]>'Z'){
        alert("cognome non valido: prima lettera minuscola");
        return;
    }

    setCookie("nome", nome, 1);
    setCookie("cognome", cognome, 1);

    window.location.href="Pagina2.html";
}

function continua2(){
    let partenza = document.getElementById("cmbPartenze").value;
    let destinazione = document.getElementById("cmbDestinazioni").value;

    if(partenza === ""){
        alert("Inserire la partenza!");
        return;
    }
    if(destinazione === ""){
        alert("Inserire la destinazione!");
        return;
    }
    if(partenza===destinazione){
        alert("Partenza e destinazione devono essere diverse!");
        return;
    }

    setCookie("partenza", partenza, 1);
    setCookie("destinazione", destinazione, 1);

    window.location.href="Pagina3.html";
}

function continua3(){
    let giornoDiOggi = new Date().getDate();
    let meseDiOggi = new Date().getMonth();
    let annoDiOggi = new Date().getFullYear();
    let giorno = document.getElementById("txtGiorno").value;
    let mese = document.getElementById("cmbMesi").value;
    let anno = document.getElementById("txtAnno").value;

    let dataOggiInGiorni = giorno + mese*30+anno*12*30;
    let dataViaggioInGiorno = giornoDiOggi + meseDiOggi*30+annoDiOggi*12*30;
    
    if(giorno===""){
        alert("Data non valida!: giorno vuoto");
        return;
    }
    if(anno===""){
        alert("Data non valida!: anno vuoto");
        return;
    }
    if(dataViaggioInGiorno-dataOggiInGiorni>30){
        alert("Data non valida!: viaggio più lontano di 30 giorni!");
        return;
    }
    if(dataViaggioInGiorno-dataOggiInGiorni<0){
        alert("Data non valida!: il viaggio è nel passato!");
        return;
    }

    setCookie("giorno", giorno, 1);
    setCookie("mese", mese, 1);
    setCookie("anno", anno, 1);

    window.location.href="Pagina4.html";
}

function continua4(){
    window.location.href="Pagina1.html";
}

function caricaRiepilogo(){
    let nome = getCookie("nome");
    let cognome = getCookie("cognome");
    let partenza = getCookie("partenza");
    let destinazione = getCookie("destinazione");
    let giorno = getCookie("giorno");
    let mese = getCookie("mese");
    let anno = getCookie("anno");
    let s="";
    s+="Nome: " + nome + " " + cognome + "<br>Città di partenza: " + partenza + "<br>Città di arrivo: " + destinazione + "<br>Data del viaggio: " + giorno + "/" + mese + "/" + anno;
    document.getElementById("pRiepilogo").innerHTML = s;
}

function caricaCMB1(){
    let cmbBox = document.getElementById("cmbPartenze");
    let s = "";
    for(let i = 0; i<citta.length;i++){
        s+="<option>"+citta[i]+"</option>";
    }
    document.getElementById("cmbPartenze").innerHTML = s;

    let cmbBox2 = document.getElementById("cmbDestinazioni");
    let s2 = "";
    for(let i = 0; i<citta.length; i++){
        s2+="<option>"+citta[i]+"</option>";
    }
    document.getElementById("cmbDestinazioni").innerHTML = s2;
}

function caricaCMB3(){
    let cmbBox = document.getElementById("cmbMesi");
    let s = "";
    for(let i = 0; i<mesi.length;i++){
        s+='<option>'+mesi[i]+'</option>';
    }
    document.getElementById("cmbMesi").innerHTML = s;
}

function setCookie(nome, valore, giorni){
    let data = new Date();
    data.setTime(data.getTime() + (giorni*24*60*60*1000))
    document.cookie = nome + "=" + encodeURIComponent(valore) + ";expires=" + data.toUTCString() + ";path=/";
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

function controllaGiorno(){
    let giorno = document.getElementById("txtGiorno").value;
    if(giorno>30){
        document.getElementById("txtGiorno").value = 30;
    }
    if(giorno<1){
        document.getElementById("txtGiorno").value = 1;
    }
}

function controllaAnno(){
    let annoDiOggi = new Date().getFullYear();
    let anno = document.getElementById("txtAnno").value;
    if(anno>annoDiOggi){
        document.getElementById("txtAnno").value = annoDiOggi;
    }
    if(anno<annoDiOggi){
        document.getElementById("txtAnno").value = annoDiOggi;
    }
}