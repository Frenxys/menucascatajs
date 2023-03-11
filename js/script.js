const elenco = {
    "Italia": ["verde","rosso","bianco"],
    "Francia": ["bianco","rosso","blu"]
}
const elenco2={
"verde":["oliva","insalata","broccoli"],
"rosso":["pomodoro","carota"],
"blu":["fruttialieni"],
"bianco":["sedano","cipolla"],
}

let nazioni = document.getElementById("nazioni");
let colori = document.getElementById("colori");  
let simili= document.getElementById("simili");

function getnazioni() {
for (var x in elenco) {
    nazioni.options[nazioni.options.length] = new Option(x);
}
}
function cleanSelect(array) {
for(x in array.options) {
    array.remove(x);
}
}
function setcolori(nazione) {
cleanSelect(colori);
for (var x in elenco) {
    if(x == nazione) {
        for(y in elenco[x] ) {
            console.log(y)
            colori.options[colori.options.length] = new Option(elenco[x][y]);
        }               
    }            
}
}
function setsimili(colore) {
cleanSelect(simili);
for (var x in elenco2) {
    if(x == colore) {
        for(y in elenco2[x] ) {
            console.log(y)
            simili.options[simili.options.length] = new Option(elenco2[x][y]);
        }               
    }            
}
}
getnazioni();
