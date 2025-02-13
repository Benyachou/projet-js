/* 
  1. Météo.

  Écrivez une fonction weatherFeeling() qui reçoit une température et qui doit console.log() s'il fait froid, doux, ou chaud.
  Il fait froid en-dessous de 10 degrés inclus.
  Il fait doux de 10 degrés non inclus à 20 degrés inclus.
  Il fait chaud au-dessus de 20 degrés non inclus.

  Testez votre fonction avec les valeurs : -15,42,5.
*/


function weatherFeeling(temp) {
  
  if (temp <= 10) {
    console.log("il faut froid");
    
  }

  else if (temp > 10 && temp <= 20) {
    console.log("il faut doux");
  }

  else if (temp > 20) {
    console.log("il faut chaud");
  }
}

/* weatherFeeling(-15)
weatherFeeling(42)
weatherFeeling(5)
weatherFeeling(13)
 */


/* 
  2. Champions.

  Créez une fonction howGoodIsThatPlayer() qui analyse le nombre de trophées d'un joueur de football 
  et qui retourne son niveau en fonction de ses résultats.

  Si un joueur a au moins remporté une coupe du monde, deux ballons d'or et 3 trophées de champion d'une 
  ligue nationale, loggez "Niveau exceptionnel".

  Si un joueur a au moins un ballon d'or et au moins un trophée de coupe nationale, loggez "Bon niveau".

  Enfin, si un joueur n'a pas assez de trophées pour apparaître dans les conditions ci-dessus, loggez "Niveau médiocre".

  Testez votre fonction à l'aide des trois objets ci-dessous.
*/

const player1 = {
  name: "Paul",
  goldenBall: 0,
  worldCup: 1,
  nationalCup: 0
}
const player2 = {
  name: "Max",
  goldenBall: 3,
  worldCup: 3,
  nationalCup: 4
}
const player3 = {
  name: "Adam",
  goldenBall: 0,
  worldCup: 0,
  nationalCup: 1
}
const player4 = {
  name: "Adam",
  goldenBall: 1,
  worldCup: 1,
  nationalCup: 1
}


function howGoodIsThatPlayer(player){

  if(player.worldCup >= 1 && player.goldenBall >= 2 && player.nationalCup >= 3){
    console.log("Niveau Zizou !!");
  }
  else if (player.goldenBall >= 1 && player.nationalCup >= 1) {
    console.log("Bon niveau");
  }
  else {
    console.log("Niveau éclaté !!");
  }
}
    


howGoodIsThatPlayer(player1)
howGoodIsThatPlayer(player2)
howGoodIsThatPlayer(player3)
howGoodIsThatPlayer(player4)