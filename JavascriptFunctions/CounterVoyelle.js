function counterVoyelle(word) {
  return word.match(/[aeiou]/gi).length
}
let chaine = "Bonjour le monde";
let nombreVoyelles = compterVoyelles(chaine);
console.log("Le nombre de voyelles dans la chaîne est : " + nombreVoyelles);