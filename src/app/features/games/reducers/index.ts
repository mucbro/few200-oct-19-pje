import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameListModel } from '../models';
export const featureName = 'gameFeature';

export interface GameFeatureState {
  list: fromList.GameState;
}

export const reducers = {
  list: fromList.reducer
};

// 1. Feature Selector
const selectGamesFeature = createFeatureSelector<GameFeatureState>(featureName);
// 2. Selector per branch
const selectGameListBranch = createSelector(selectGamesFeature, g => g.list);
// 3. Helpers

const { selectAll: selectGameArray } = fromList.adapter.getSelectors(selectGameListBranch);
// 4. For our components

//  -- Need an GameListItemModel[] for the list.
export const selectGameListModel = createSelector(
  selectGameArray,
  (games) => games as GameListModel[]
);
