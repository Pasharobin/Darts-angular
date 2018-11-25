import { Injectable } from '@angular/core';

import { User } from './user.model';
import { Player } from './player.model';
import { Dart } from './dart.model';

@Injectable()
export class AppService {

  users: User[] = [
    { name: 'Batman', email: 'batman@mail.ru', selected: false },
    { name: 'Robin', email: 'robin@mail.ru', selected: false },
    { name: 'Joker', email: 'joker@mail.ru', selected: false }
  ]

  players: Player[] = [];

  gameMode: number = 501;

  constructor() { }

  allUsers() {
    return this.users;
  }

  addUser(name: string, email: string) {
    let user: User = new User(name, email);
    this.users.push(user);
  }

  selectUser(i: number) {
    this.users[i].selected = !this.users[i].selected;
  }

  deleteUser(i: number) {
    this.users.splice(i, 1);
  }

  getGameMode() {
    return this.gameMode;
  }

  changeGameMode(mode) {
    this.gameMode = mode;
  }

  createPlayers() {
    this.players = this.users.filter(user => user.selected).map(user => new Player(user.name))
  }

  getPlayers() {
    return this.players;
  }

  calculate() {
    for (let player of this.players) {
      let result: number;
      if (player.results.length == 0) {
        result = this.gameMode;
      } else result = player.results[0];
      player.results.unshift(this.checkDarts(player.dart1, player.dart2, player.dart3, result));
      player.dart1 = new Dart();
      player.dart2 = new Dart();
      player.dart3 = new Dart();
    }
  }

  checkDarts(dart1: Dart, dart2: Dart, dart3: Dart, result: number) {
    let turn = result;
    turn -= +dart1.score * dart1.multiplier;
    if (turn == 0) {
      if (dart1.multiplier == 2) {
        return 0;
      }
      return result;
    }
    if (turn < 0 || turn == 1) {
      return result;
    }
    turn -= +dart2.score * dart2.multiplier;
    if (turn == 0) {
      if (dart2.multiplier == 2) {
        return 0;
      }
      return result;
    }
    if (turn < 0 || turn == 1) {
      return result;
    }
    turn -= +dart3.score * dart3.multiplier;
    if (turn == 0) {
      if (dart3.multiplier == 2) {
        return 0;
      }
      return result;
    }
    if (turn < 0 || turn == 1) {
      return result;
    }
    return turn;
  }

  checkWinner() {
    if (this.players[0].results.length == 20 || this.players[0].results.length == 30) {
      if (this.players.length < 2) {
        return null;
      }
      let arr = [this.players[0].results[0]];
      let min = [0, this.players[0].results[0]];
      for (let i = 0; i < this.players.length - 1; i++) {
        arr.push(this.players[i + 1].results[0]);
        if (min[1] > this.players[i + 1].results[0]) {
          min = [i + 1, this.players[i + 1].results[0]]
        }
      }
      if (arr.filter(i => i == min[1]).length > 1) {
        if (this.players[0].results.length == 30) {
          return 'Nobody';
        }
        return null;
      }
      return this.players[min[0]].name;
    }

    for (let player of this.players) {
      if (player.results[0] == 0) {
        return player.name;
      }
    }

    return null;
  }

}
