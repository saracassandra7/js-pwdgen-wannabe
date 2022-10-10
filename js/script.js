//dichiarazione delle variabili
const nomeUtente = prompt('qual è il tuo nome?');
const cognomeUtente = prompt('qual è il tuo cognome?');
const colorePreferito = prompt('qual è il tuo colore preferito?');

//output
document.getElementById('pwd').innerHTML += `
 ${nomeUtente}${cognomeUtente}${colorePreferito}22
`;


