// Esercizio numero 1

var studente = {

  'nome' : 'Flavio',
  'cognome' : 'Muscente',
  'età' : 24
};

for(var key in studente){
  console.log(key.charAt(0).toUpperCase() + key.slice(1));
  console.log(studente[key]);
}
//Esercizio 2

var studenti = [
  {
    'nome' : 'Flavio',
    'cognome' : 'Muscente',
    'età' : 24
  },
  {
    'nome' : 'Mirko',
    'cognome' : 'Guerra',
    'età' : 27
  },
  {
    'nome' : 'Marco',
    'cognome' : 'Tabaro',
    'età' : 24
  },
  {
    'nome' : 'Flavio',
    'cognome' : 'Cordari',
    'età' : 29
  },
  {
    'nome' : 'Pippo',
    'cognome' : 'Baudo',
    'età' : 84
  },

];
for(var i=0; i < studenti.length; i++){

  console.log("Nome: ");
  console.log(studenti[i].nome);
  console.log("Cognome: ");
  console.log(studenti[i].cognome);

}

//esercizio numero 3

var nuovoStudente = {

  'nome' : undefined,
  'cognome' : undefined,
  'età' : undefined
};

for(var tool in nuovoStudente){
  nuovoStudente[tool] = prompt("inserisci " + tool + " studente :");
}

studenti.push(nuovoStudente);

console.log(studenti);
