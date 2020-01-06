import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameListItem } from './models';
import { GameFeatureState, selectGameListItem } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {


  games$: Observable<GameListItem[]>;
  constructor(private store: Store<GameFeatureState>) { }

  ngOnInit() {
    this.games$ = this.store.select(selectGameListItem);
  }

}
