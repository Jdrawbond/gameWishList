import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameListService } from './services/game-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameWishList';
  public search_string = '';

  form: any = FormGroup;


  constructor(private router: Router, private fb: FormBuilder,
    private gameService: GameListService) {
    this.form = this.fb.group({
      filter_name: ['', [Validators.required]]
    })
  }



  onSubmit() {




    console.log("Movie Name: ", this.form.value.filter_name);
    // window.location.reload()

    this.router.navigate(['/current-game', this.form.value.filter_name]);
    // location.reload()

  }
}
