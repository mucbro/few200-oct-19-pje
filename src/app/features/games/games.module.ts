import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';



@NgModule({
  declarations: [GamesComponent, ListComponent, EntryComponent],
  // allow app module to see me
  exports: [GamesComponent],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
