import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { FilterPipe } from '../Pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    CreateGameComponent,
    EditGameComponent,
    GameDetailComponent,
    GameListComponent,
    FilterPipe,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class ComponentsModule { }
