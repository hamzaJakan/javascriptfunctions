echo " combien de personnes êtes-vous ?"
read perscount
echo "Le nombre de personnes est : $perscount"
eggcount=$ ((persCount * 1))
echo "Le nombre d'oeufs par personne est : $eggcount"
creamquantity=$((perscount * 20))
echo "La quantité de crème par personne est de :$creamquantity cl"
echo " Combien de personnes êtes-vous ?"
read persCount 
echo "Le nombre de personne est : $perscount"
meatquantity=((perscount * 100))
echo "La quantité de lardons par personne est de : $meatquantity g"
echo "Recette de la quiche lorraine pour $perscount personnes :" > recette.txt
echo "" >> recette.txt
echo "Disposez une pâte brisée dans un plat rond" >> recette.txt
echo "Mélangez dans un grand bol les $eggcount oeufs, $creamquantity cl de crème et $meatquantity g de morceaux de viande de votre choix." >> recette.txt
echo "Versez le mélange sur la pâte dans le plat rond." >> recette.txt
echo " Ajoutez du fromage rapé dessus"
echo  "Ajoutez du fromage rapé dessus" >> recette.txt 
echo "Enfournez à 200°C pendant 40 minutes." >> recette.txt
EOF
alias recette='bash bureau/cours_terminal/recette.sh'

