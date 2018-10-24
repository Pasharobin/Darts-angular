import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  players: Player[] = [];
  gameOver: boolean = false;
  winner: string = '';

  constructor(
    private appService: AppService,
    private router: Router
    ) { }

  ngOnInit() {
    this.players = this.appService.getPlayers();
  }
  

  newGame() {
    this.gameOver = false;
    this.router.navigate(['/settings']);
  }

  addResults() {
    this.appService.calculate();
    let winner = this.appService.checkWinner();
    if (winner) {
      this.gameOver = true;
      this.winner = winner;
    }
    console.log(winner);
  }

}


