import * as fromCounter from './counter.reducer';
import { createSelector, ActionReducerMap, INITIAL_STATE } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}; // "reducer map


// Selector functions

// 1 create a feature selector

// 2 create a selectior for each branch of the state
const selectCounterBranch = (state: AppState) => state.counter;
// 3 helpers

// 4 fro the components

// --- we need one that returs the current count

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.count);
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);
export const selectCountingBy = createSelector(selectCounterBranch, d => d.by);
