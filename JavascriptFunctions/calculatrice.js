function calculatrice() {


  let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));


  let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));


  let operation = prompt("Entrez l'opération souhaitée (+, -, *, /) :");


  let resultat;






  switch (operation) {


    case "+":
      resultat =
        resultat


      additionner(nombre1, nombre2);
      break;


    case "-":
      resultat =
        resultat


      soustraire(nombre1, nombre2);


      break;


    case "*":
      resultat =

        multiplier(nombre1, nombre2);


      break;


    case "/":
      resultat =

        diviser(nombre1, nombre2);


      break;


    default:


      console.log("Opération invalide !");
      return;
  }
  console.log("Le résultat est : " + resultat);

}
calculatrice();


