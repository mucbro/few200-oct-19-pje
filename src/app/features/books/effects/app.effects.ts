import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { loadBookData } from '../actions/list.actions';
import { applicationStarted } from 'src/app/actions/app.actions';



@Injectable()
export class AppEffects {

  loadBookData$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationStarted),
        map(() => loadBookData())
      )
  );


  constructor(private actions$: Actions) { }
}
