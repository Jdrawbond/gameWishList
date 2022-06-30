import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  form: any = FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private gameService: GameListService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: ['', [Validators.required]],
      cover: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      art: ['', [Validators.required]],
      release_date: ['', [Validators.required]],
      description: ['', [Validators.required]]

    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {

    if (this.form.invalid) {
      console.log("Kindly Fill all the Inputs");
      alert("Kindly Fill all the Inputs")
    }
    else {
      this.gameService.createGame(this.form.value);
      this.router.navigate(['list-game']);
      // alert("Data Successfully Added")
    }
  }

}
