import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'create', component: CreateGameComponent },
  { path: 'list-game', component: GameListComponent },
  { path: 'update-game/:id', component: EditGameComponent },
  { path: 'game-detail/:title', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
