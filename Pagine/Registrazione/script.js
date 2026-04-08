document.addEventListener("DOMContentLoaded", function(){
    //carica gli anni nella comboBox
    let menu = document.getElementById("menu");
    let annoCorrente = new Date().getFullYear();    
    let html="";
    for(let i = 1900;i<=annoCorrente;i++)
        html+="<option value="+i+">"+i+"</option>"
    menu.innerHTML = html;
    
    
});

function stampaStringaFinale(){
    let nome=document.getElementById("textBoxNome");
    let cognome=document.getElementById("textBoxCognome");
    console.log("Gentile sig./sig.ra " + nome.value + " " + cognome.value +" la ringraziamo per la registrazione.")
}

function permettiRegistrazione(){

}

function nonPremettereRegistrazione(){
}