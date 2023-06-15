import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [HeaderComponent, CharacterListComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, CharacterListComponent],
})
export class SharedModule {}
