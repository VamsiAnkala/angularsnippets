import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicTacToeComponent } from './tictactoe.component';

@NgModule({
  declarations: [TicTacToeComponent],
  exports: [TicTacToeComponent],
  imports: [BrowserModule],
})
export class TicTacToeModule {}
