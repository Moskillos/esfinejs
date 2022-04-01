// 1) Crea uno script che recuperi i dati dalla seguente API: https://api.covid19api.com/summary. 

// Da questa:
// 1. Ritorna i Total Confirmed
// 2. Ritorna la lista di tutte le Country (solo il nome)
// 3. Ritrona solo il più alto per i Total Confirmed e i Toltal confirmed più basso

async function api(){
    const response = await fetch('https://api.covid19api.com/summary');
    const json = await response.json();
    console.log(json);

}

api()