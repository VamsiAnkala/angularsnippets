import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicTacToeModule } from './tic-tac-toe/tictactoe.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TicTacToeModule],
  providers: [TicTacToeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
