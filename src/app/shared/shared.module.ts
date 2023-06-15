import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [HeaderComponent, CharacterListComponent, CharacterCardComponent],
})
export class SharedModule {}
