let studenti = [];
let datiSalavati = localStorage.getItem("studenti");
if(datiSalavati !== null){
    studenti = JSON.parse(datiSalavati);
}
mostraStudenti();

function aggiungiStudente(){
    let nome = document.getElementById("nome").value;

    //controllo se ci sono caratteri compresi tra a e z o tra A e Z e controllo che ci sia almeno un carattere
    let regexNome = /^[a-zA-Z\s]+$/;
    if(!regexNome.test(nome)){
        alert("Il nome non è valido!");
        return;
    }
    studenti.push(nome);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
    document.getElementById("nome").value = "";
}

function mostraStudenti(){
    let lista = document.getElementById("listaStudenti");
    lista.innerHTML = "";

    for(let i=0;i<studenti.length;i++){
        let p = document.createElement("p");
        p.innerHTML=studenti[i];
        let button = document.createElement("button");
        button.textContent = "Elimina";
        button.onclick = function(){eliminaStudente(i)}
        p.appendChild(button);
        lista.appendChild(p);
    }
}

function eliminaStudente(indice){
    studenti.splice(indice, 1);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
}