import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [GamesComponent, ListComponent, EntryComponent],
  // allow app module to see me
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [GamesComponent]
})
export class GamesModule { }
