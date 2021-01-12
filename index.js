const playerOne = {
  name: '',
  shipCount: 0,
  board:[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
  ]
}
const playerTwo = {
  name: '',
  shipCount: 0,
  board:[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
  ]
}
const randomNum = (player) => {
  return Math.floor(Math.random() * player.board.length)
}
const placeShip = (player) => {
  while(player.shipCount < player.board.length){
      const x = randomNum(player)
      const y = randomNum(player)
      if(player.board[x][y] === 0){
        player.board[x][y] = 1;
      }
      player.shipCount++
  }
  return player;
}
console.log(placeShip(playerOne), 'Player One board');
console.log(placeShip(playerTwo), 'Player two board');
const strikeCordinates = (str) => {
  let ans;
  while(true){
    let proMpt = prompt(str)
    ans = parseInt(proMpt);
    if(isNaN(ans)){
      continue;
    } else if(ans < 0 || ans > 3){
      alert('cordinates are not on the board');
    }
    break;
  }
  return ans;
}
const playerMoves = (player) => {
 let x = strikeCordinates(`${player.name}, make your guess. Choose a strike cordinate x from 0 to 3`);
 let y = strikeCordinates(`${player.name}, make your guess. Choose a strike cordinate y from 0 to 3`);
 if (player.board[x][y] === 1) {
        alert('Hit!');
        player.board[x][y] = 0;
        player.shipCount--
        console.log(playerTwo,"<>>>>Player two ")
        console.log(playerOne,"<>>>>>PLayerOne ")
      } else {
        alert('Miss!')
        return false;
        } 
        if (player.shipCount === 0) {
          return true;
        } else {
          return false;
        }
}
const battleship = () => {
  let pOne = placeShip(playerOne);
  let pTwo = placeShip(playerTwo);
  let turn = 1;
  let win = false;
  let winner = '';
  pOne.name = prompt("Player One, What is your name?");
  pTwo.name = prompt("Player Two, What is your name?");
 while (!win) {
   if (turn === 1) {
     let player1Move = playerMoves(pOne);
    win = player1Move;
    if (win === true ) {
      winner = pOne.name;
    }
     turn = 2;
   } else {
     let player2Move = playerMoves(pTwo);
     win = player2Move;
     if (win === true) {
       winner = pTwo.name;
     }
     turn = 1;
   }
 }
  return `The winner is ${winner}`;
}
//console.log(playerOne, "player one");
//console.log(playerTwo, "player Two");
//console.log(battleship());

const gameResult = battleship();

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
