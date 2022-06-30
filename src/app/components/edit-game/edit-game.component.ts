import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  form: any = FormGroup;

  gameRef: any

  constructor(private fb: FormBuilder,
    private router: Router,
    private gameService: GameListService,
    private act: ActivatedRoute) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      cover: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      art: ['', [Validators.required]],
      release_date: ['', [Validators.required]],
      description: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    console.log("ID: ", id);


    this.gameService.getgameListDoc(id).subscribe((res) => {
      console.log("GameRef: ", res);
      this.gameRef = res;


      this.form = this.fb.group({
        title: [this.gameRef.title],
        cover: [this.gameRef.cover],
        genre: [this.gameRef.genre],
        art: [this.gameRef.art],
        release_date: [this.gameRef.release_date],
        description: [this.gameRef.description]

      });


    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {

    const id = this.act.snapshot.paramMap.get('id');

    if (this.form.invalid) {
      console.log("Please Fill all the Inputs");
      alert("Please Fill all the Inputs")
    }
    else {
      this.gameService.UpdateGame(this.form.value, id);
      this.router.navigate(['list-game']);

    }
  }
}
