import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CharacterListComponent,
    CharacterCardComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    HeaderComponent,
    CharacterListComponent,
    CharacterCardComponent,
    SearchBarComponent,
  ],
})
export class SharedModule {}
