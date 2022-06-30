import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGameList } from 'src/app/models/game-list';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game_list: IGameList[] = [];
  suggested_list: IGameList[] = [];

  constructor(private act: ActivatedRoute, private gameService: GameListService) { }

  ngOnInit(): void {
    // window.location.reload()

    const title = this.act.snapshot.paramMap.get('title');
    console.log("Title: ", title);


    this.gameService.getgameList().subscribe((resp) => {
      let books: any[] = []
      resp.forEach((e: any) => {
        books.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        })

      });

      this.game_list = books;
      console.log("Complete Data: ", this.game_list);

      const suggested_obj = books.filter((item) => {
        return item.title == title;
      })

      books.map((item) => {
        if (item.genre == suggested_obj[0].genre) {
          this.suggested_list.push(item);
        }
      })
      console.log("Suggested Game: ", this.suggested_list);



      this.game_list = this.game_list.filter((item) => {
        return item.title == title;
      })

      // this.game_list.map((item) => {
      //   if(item.title == title;
      // })

      console.log("Selected Game: ", this.game_list);



    })
  }
}
