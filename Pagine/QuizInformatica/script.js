const risposte = ["SQL", "3", "Dinamiche", ["1","3"], "byte"];

function elaboraQuiz(){
    let punti = 0;

    // Risposte
    let risposta1 = document.querySelector("#Risposta1").value.trim().toUpperCase();
    let risposta2 = document.querySelector("#Risposta2").value;
    let risposta3 = document.querySelector('input[name="risposta3"]:checked');
    let risposta5 = document.querySelector("#Risposta5").value.trim().toLowerCase();

    // Checkboxes
    let checkboxes = document.querySelectorAll(".risposta4:checked");
    let valoriSelezionati = [];
    checkboxes.forEach(cb => valoriSelezionati.push(cb.value));

    // Correzione
    if(risposta1 === risposte[0]) punti++;
    if(risposta2 === risposte[1]) punti++;
    if(risposta3 && risposta3.value === risposte[2]) punti++;
    if(valoriSelezionati.length === risposte[3].length &&
       valoriSelezionati.every(v => risposte[3].includes(v))) punti++;
    if(risposta5 === risposte[4]) punti++;

    // Punteggio finale
    let punteggioFinale = punti * 10;
    document.querySelector("#textBoxPunteggio").value = punteggioFinale;

    // DATI UTENTE
    let cognome = document.querySelector("#textBoxCognome").value.toUpperCase();
    let nome = document.querySelector("#textBoxNome").value.toUpperCase();
    let mese = document.querySelector("select").selectedOptions[0].text;
    let anno = document.querySelector("#textBoxAnno").value;

    // Costruzione codice
    let codCognome = cognome.substring(0,3);
    let codNome = nome.substring(0,3);
    let codMese = mese.substring(0,3);
    let codAnno = anno.substring(anno.length - 2);

    let codice = codCognome + codNome + codMese + codAnno + "_" + punteggioFinale;

    // Output finale
    document.querySelector("#textBoxCodiceTest").value = codice;
}

function cancellaQuiz(){
    // Svuota input testo
    document.querySelectorAll("input[type='text']").forEach(input => input.value = "");

    // Reset select
    document.querySelectorAll("select").forEach(select => select.selectedIndex = 0);

    // Reset radio
    document.querySelectorAll("input[type='radio']").forEach(radio => radio.checked = false);

    // Reset checkbox
    document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);

    // Svuota punteggio
    document.querySelector("#textBoxPunteggio").value = "";
    document.querySelector("#textBoxCodiceTest").value = "";
}