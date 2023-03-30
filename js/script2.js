const nazioniEl = document.getElementById("nazioni");
const coloriEl = document.getElementById("colori");  
const similiEl = document.getElementById("simili");
const elencoBandiere = {
  "Italia": ["verde", "bianco", "rosso"],
  "Francia": ["blu", "bianco", "rosso"],
  // aggiungere altre nazioni e colori qui
};
const elencoCibi = {
  "verde": ["oliva", "insalata", "broccoli"],
  "rosso": ["pomodoro", "carota"],
  "blu": ["fruttialieni"],
  "bianco": ["sedano", "cipolla"],
  // aggiungere altri colori e cibi qui
};
//vicao
// Popola il menu delle nazioni con le opzioni corrispondenti alle nazioni nell'elenco delle bandiere.
function popolaMenuNazioni() {
  for (const nazione in elencoBandiere) {
    nazioniEl.add(new Option(nazione));
  }
}

// Popola il menu dei colori con le opzioni corrispondenti ai colori della bandiera della nazione selezionata.
function popolaMenuColori() {
  const nazioneSelezionata = nazioniEl.value;
  coloriEl.innerHTML = ""; // pulisce il menu dei colori
  const colori = elencoBandiere[nazioneSelezionata];
  for (const colore of colori) {
    coloriEl.add(new Option(colore));
  }
  similiEl.innerHTML = ""; // pulisce il menu "simili"
}

// Popola il menu "simili" con le opzioni corrispondenti ai cibi del colore selezionato.
function popolaMenuSimili() {
  const coloreSelezionato = coloriEl.value;
  similiEl.innerHTML = ""; // pulisce il menu "simili"
  const cibi = elencoCibi[coloreSelezionato];
  for (const cibo of cibi) {
    similiEl.add(new Option(cibo));
  }
}

// Aggiunge gli event listener per gli eventi "change" sui menu a cascata.
nazioniEl.addEventListener("change", () => {
  popolaMenuColori();
});
coloriEl.addEventListener("change", () => {
  popolaMenuSimili();
});

// Popola il menu delle nazioni all'avvio della pagina.
popolaMenuNazioni();
