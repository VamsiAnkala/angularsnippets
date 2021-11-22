import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.scss'],
})
export class TicTacToeComponent implements OnInit {
  gridSize: number = 9;
  idArray: any = [];
  player1Clicked: boolean = false;
  player1Symbol: string = 'X';
  player2Symbol: string = 'O';
  clickCount: number = 0;
  possibleWinCombinations: any = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  constructor() {}
  ngOnInit() {
    this.createGame();
  }
  createGame() {
    for (let i = 1; i <= this.gridSize; i++) {
      // this.idArray.push(i);
      let newTile = new TicTacToeTile(i);
      this.idArray.push(newTile);
    }
  }
  tileClicked(tile: any) {
    this.clickCount++;
    if (this.player1Clicked) {
      tile.entry = this.player1Symbol;
    } else {
      tile.entry = this.player2Symbol;
    }
    this.player1Clicked = !this.player1Clicked;
    console.log(this.idArray);
    if (this.clickCount == 9) {
      alert('DRAW');
      this.resetGame();
    }
    if (this.checkWinStatus(this.player1Symbol)) {
      alert('Player2 WON');
      this.resetGame();
    }
    if (this.checkWinStatus(this.player2Symbol)) {
      alert('Player1 WON');
      this.resetGame();
    }
  }
  checkWinStatus(symbol: string) {
    let chosenArray: number[] = [];
    let playerWon: boolean = false;
    this.idArray.forEach((ele: any) => {
      if (ele.entry == symbol) chosenArray.push(ele.id);
    });
    this.possibleWinCombinations.forEach((combination: any, index: any) => {
      let flag: number = 0;
      combination.forEach((id: any) => {
        chosenArray.forEach((el: number) => {
          if (el == id) flag++;
        });
      });
      if (flag == 3) {
        playerWon = true;
      }
    });
    if (playerWon) {
      return true;
    }
    return false;
  }
  resetGame() {
    this.idArray.forEach((element: any) => {
      element.entry = '';
    });
    this.player1Clicked = false;
  }
}
class TicTacToeTile {
  id: number = 0;
  entry: string = '';
  constructor(id: number) {
    this.id = id;
  }
}
