import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  sugCharacters: any = [];
  showList: boolean = false;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit() {}

  getSuggestions(event: any) {
    if (!event.target.value) {
      this.showList = false;

      return;
    }
    this.characterService
      .get({ name: event.target.value, limit: '5' })
      .pipe(first())
      .subscribe(
        (characters: any) => {
          this.sugCharacters = characters.results.slice(0, 4);
          this.showList = true;
        },
        (error) => {
          this.showList = false;
        }
      );
  }

  search(event: any) {
    this.router.navigate(['/'], {
      queryParams: { search: event.target.value },
    });
  }

  changeFocus(isOnfocus: boolean) {
    this.showList = isOnfocus;
  }
}
