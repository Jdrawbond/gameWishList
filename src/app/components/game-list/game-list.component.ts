import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGameList } from 'src/app/models/game-list';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  game_list: IGameList[] = [];
  filter_game_list: IGameList[] = [];

  public string_filter = ''

  form: any = FormGroup;

  constructor(private router: Router,
    private gameService: GameListService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      filter_name: ['', [Validators.required]],
    });

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
    })

    console.log("Complete Data: ", this.game_list);

  }

  onSubmit() {
    console.log("Value: ", this.form.value.filter_name);
    // this.ngOnInit();

    this.string_filter = this.form.value.filter_name;
    console.log("Filter : ", this.string_filter);

  }

  removeGame(item: any) {
    console.log("Delete ID: ", item.id);

    if (confirm("Are you sure you want to delete: " + item.title)) {
      this.gameService.deleteGame(item);
    }
  }

}
