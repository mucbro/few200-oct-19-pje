import { Component, OnInit } from '@angular/core';
import { countBySet } from '../../actions/counter.actions';
import { Store } from '@ngrx/store';
import { AppState, selectCountingBy } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-by',
  templateUrl: './counter-by.component.html',
  styleUrls: ['./counter-by.component.css']
})
export class CounterByComponent implements OnInit {

  by$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.by$ = this.store.select(selectCountingBy);
  }

  setCountBy(by: number) {
    this.store.dispatch(countBySet({ by }));
  }
}
