import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
