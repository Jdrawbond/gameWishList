import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IGameList } from '../models/game-list';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  public filter_string = '';

  constructor(private angularfirestore: AngularFirestore) { }

  getgameListDoc(id: any) {
    return this.angularfirestore
      .collection('list-game-collection')
      .doc(id)
      .valueChanges()
  }

  getgameList() {
    return this.angularfirestore
      .collection('list-game-collection')
      .snapshotChanges()
  }

  createGame(new_game: any) {
    return new Promise<any>((resolve, reject) => {
      this.angularfirestore
        .collection('list-game-collection')
        .add(new_game)
        .then(response => {
          console.log(response)
          alert("Data Successfully Added")
        }, error => reject(error));
    })

  }

  deleteGame(game: any) {
    return this.angularfirestore
      .collection('list-game-collection')
      .doc(game.id)
      .delete();

  }


  UpdateGame(game: IGameList, id: any) {
    return this.angularfirestore
      .collection('list-game-collection')
      .doc(id)
      .update({
        title: game.title,
        cover: game.cover,
        genre: game.genre,
        art: game.art,
        release_date: game.release_date,
        description: game.description
      }).then(response => {
        console.log(response)
        alert("Data Updated Successfully")
      }, error => reject(error));

  }
}
function reject(error: any): any {
  throw new Error('Function not implemented.');
}

