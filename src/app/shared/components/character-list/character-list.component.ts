import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { finalize, first } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  search: string = '';
  page: number = 1;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(scrollLoading?: InfiniteScrollCustomEvent) {
    this.characterService
      .get({ name: this.search, page: `${this.page}` })
      .pipe(
        first(),
        finalize(() => {
          if (scrollLoading) {
            scrollLoading.target.complete();
          }
        })
      )
      .subscribe((characters: any) => {
        this.characters = [...this.characters, ...characters.results];
      });
  }

  onIonInfinite(event: any) {
    this.page++;

    this.getCharacters(event);
  }
}