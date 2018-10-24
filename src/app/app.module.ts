import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { SettingsComponent } from './settings/settings.component';
import { AppService } from './app.service';
import { SearchPipe } from './search.pipe';
import { GameComponent } from './game/game.component';
import { NoSelectedPipe } from './no-selected.pipe';

const routes: Routes = [
  {path: "", redirectTo: '/settings', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent},
  {path: 'game', component: GameComponent},
  {path: 'new', component: NewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    SettingsComponent,
    SearchPipe,
    GameComponent,
    NoSelectedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
