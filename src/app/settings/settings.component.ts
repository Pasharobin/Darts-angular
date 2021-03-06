import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  users = [];
  searchStr: string = '';
  gameMode: number;

  constructor(
    private appService: AppService,
    private router: Router
    ) { }

  ngOnInit() {
    this.users = this.appService.allUsers();
    this.gameMode = this.appService.getGameMode();
  }

  onSelect(i: number) {
    this.appService.selectUser(i);
  }

  onDelete(i: number) {
    this.appService.deleteUser(i);
  }

  newPlayer() {
    this.router.navigate(['/new']);
  }

  start() {
    this.appService.changeGameMode(this.gameMode);
    this.appService.createPlayers();
    this.router.navigate(['/game']);
  }

}
