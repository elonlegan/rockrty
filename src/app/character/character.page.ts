import { Component, OnInit } from '@angular/core';
import { first, finalize } from 'rxjs';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  character: any;
  loading: boolean = true;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.characterService
      .getById('1')
      .pipe(
        first(),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((character: any) => {
        this.character = character;
      });
  }
}
