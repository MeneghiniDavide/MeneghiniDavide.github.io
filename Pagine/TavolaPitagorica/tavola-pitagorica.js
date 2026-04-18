function creaTavolaPitagorica() {
    // Crea la tabella
    const table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '10');
    table.setAttribute('cellspacing', '0');
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Angolo vuoto in alto a sinistra
    const cornerTh = document.createElement('th');
    cornerTh.textContent = '×';
    cornerTh.style.backgroundColor = '#f0f0f0';
    headerRow.appendChild(cornerTh);
    
    // Intestazioni delle colonne (1-10)
    for (let i = 1; i <= 10; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        th.style.backgroundColor = '#f0f0f0';
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Corpo della tabella
    const tbody = document.createElement('tbody');
    
    // Crea le righe della tabella
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        
        // Intestazione della riga (moltiplicatore)
        const rowHeader = document.createElement('th');
        rowHeader.textContent = i;
        rowHeader.style.backgroundColor = '#f0f0f0';
        row.appendChild(rowHeader);
        
        // Crea le celle con i prodotti
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            const product = i * j;
            cell.textContent = product;
            cell.style.textAlign = 'center';
            
            // Applica lo sfondo rosso ai valori dispari
            if (product % 2 !== 0) {
                cell.style.backgroundColor = 'red';
                cell.style.color = 'white'; // Testo bianco per contrasto
            }
            
            row.appendChild(cell);
        }
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    
    // Aggiungi stili aggiuntivi alla tabella
    table.style.borderCollapse = 'collapse';
    table.style.fontFamily = 'Arial, sans-serif';
    
    return table;
}

// Funzione per aggiungere la tabella alla pagina
function mostraTavolaPitagorica() {
    // Cerca il contenitore principale
    const mainContainer = document.querySelector('main');
    
    // Rimuovi eventuale tabella esistente (se presente nel main)
    const existingTable = mainContainer.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }
    
    // Crea la nuova tabella
    const tavola = creaTavolaPitagorica();
    
    // Aggiungi la tabella al main
    mainContainer.appendChild(tavola);
}

// Esegui quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', mostraTavolaPitagorica);