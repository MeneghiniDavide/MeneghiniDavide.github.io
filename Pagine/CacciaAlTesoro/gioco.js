// --- LOGICA GPS E CALCOLO ---

/** Ottiene la posizione corrente tramite Geolocation API */
const ottieniPosizione = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation non supportata'));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 8000,
    });
  });

/** Calcolo distanza in METRI (formula Haversine) */
const calcolaDistanza = (lat1, lon1, lat2, lon2) => {
  const R    = 6371000; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a    =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const RAGGIO_VICINANZA = 100; // metri entro i quali si sblocca l'indizio

// --- DATI INDIZI (Coordinate aggiornate) ---
const INDIZI = [
  { id: 1, testo: "Il primo segreto...", lat: 45.4654, lon: 9.1859, soluzione: 'PIETRA', punti: 100 },
  { id: 2, testo: "Le parole dei saggi...", lat: 45.4668, lon: 9.1880, soluzione: 'BIBLIOTECA', punti: 150 },
  { id: 3, testo: "La natura nasconde...", lat: 45.4640, lon: 9.1900, soluzione: 'RADICE', punti: 200 },
  { id: 4, testo: "Segui il suono delle ore...", lat: 45.4620, lon: 9.1870, soluzione: 'TEMPO', punti: 300 }
];

// --- FUNZIONI DI GESTIONE PAGINA ---

function aggiornaHeader() {
  document.getElementById("nomeGiocatore").innerText = localStorage.getItem("nomeGiocatore");
  document.getElementById("punteggio").innerText = localStorage.getItem("punteggio");
  document.getElementById("vite").innerText = localStorage.getItem("vite");
}

/** Funzione principale chiamata all'avvio di ogni pagina indizio */
async function inizializzaIndizio(index) {
  aggiornaHeader();
  
  // 1. Mostra il testo dell'indizio
  document.getElementById("pIndizio1").innerText = INDIZI[index].testo;

  // 2. Disabilita inizialmente input e pulsante invia
  document.getElementById("txtRisposta1").disabled = true;
  document.getElementById("btnInviaRisposta1").disabled = true;

  // 3. Esegue un primo calcolo della distanza automatico
  await aggiornaDistanza(index);
}

/** Calcola la distanza e aggiorna l'interfaccia */
async function aggiornaDistanza(index) {
  const displayDistanza = document.getElementById("testoDistanza");
  const btnInvia = document.getElementById("btnInviaRisposta1");
  const txtRisposta = document.getElementById("txtRisposta1");
  const feedback = document.getElementById("risposta1");

  displayDistanza.innerText = "📡 Rilevamento posizione...";

  try {
    const pos = await ottieniPosizione();
    const d = calcolaDistanza(
      pos.coords.latitude, 
      pos.coords.longitude, 
      INDIZI[index].lat, 
      INDIZI[index].lon
    );

    const distanzaArrotondata = Math.round(d);
    displayDistanza.innerText = `Distanza attuale: ${distanzaArrotondata} metri`;

    if (d <= RAGGIO_VICINANZA) {
      feedback.innerText = "✅ Sei abbastanza vicino! Ora puoi rispondere.";
      feedback.style.color = "green";
      btnInvia.disabled = false;
      txtRisposta.disabled = false;
    } else {
      feedback.innerText = `❌ Sei troppo lontano (${distanzaArrotondata}m). Devi essere a meno di ${RAGGIO_VICINANZA}m.`;
      feedback.style.color = "red";
      btnInvia.disabled = true;
      txtRisposta.disabled = true;
    }
  } catch (err) {
    displayDistanza.innerText = "⚠️ Errore GPS. Assicurati che sia attivo.";
    console.error(err);
  }
}

// --- FUNZIONI CHIAMATE DAGLI HTML ---

function avanti1(){
  let nome = document.getElementById("txtNome").value;
  if(!nome) return alert("Inserisci il nome!");
  localStorage.setItem("nomeGiocatore", nome);
  localStorage.setItem("punteggio", 0);
  localStorage.setItem("vite", 3);
  window.location.href = "indizio1.html";
}

// Pagina 1
function caricaPagina1() { inizializzaIndizio(0); }
function sonoQui1() { aggiornaDistanza(0); }
function invia1() { verificaRisposta(0, "indizio2.html"); }

// Pagina 2
function caricaPagina2() { inizializzaIndizio(1); }
function sonoQui2() { aggiornaDistanza(1); }
function invia2() { verificaRisposta(1, "indizio3.html"); }

function caricaPagina3() { inizializzaPagina(2); }
function sonoQui3() { gestisciSonoQui(2); }
function invia3() { verificaRisposta(2, "indizio4.html"); }

function caricaPagina4() { inizializzaPagina(3); }
function sonoQui4() { gestisciSonoQui(3); }
function invia4() { verificaRisposta(3, "fine.html"); }

/** Verifica se la parola inserita è corretta */
function verificaRisposta(index, prossimaPagina) {
  const rispostaUtente = document.getElementById("txtRisposta1").value.toUpperCase().trim();
  const indizio = INDIZI[index];

  if (rispostaUtente === indizio.soluzione) {
    let p = parseInt(localStorage.getItem("punteggio")) + indizio.punti;
    localStorage.setItem("punteggio", p);
    alert("Corretto!");
    window.location.href = prossimaPagina;
  } else {
    let v = parseInt(localStorage.getItem("vite")) - 1;
    localStorage.setItem("vite", v);
    aggiornaHeader();
    if (v <= 0) {
      alert("Game Over!");
      window.location.href = "index.html";
    } else {
      alert("Risposta errata! Perdi una vita.");
    }
  }
}