import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface GameEntity {
  id: string;
  title: string;
  publisher: string;
  platform: string;
}

export interface GameState extends EntityState<GameEntity> {

}

export const adapter = createEntityAdapter<GameEntity>();

const initialState: GameState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'Super Mario Odyssey',
      publisher: 'Nintendo',
      platform: 'Nintendo Switch'
    },
    2: {
      id: '2',
      title: 'Spider-Man',
      publisher: 'Insomniac Games',
      platform: 'Playstation 4'
    },
  },
};
const reducerFunction = createReducer(
  initialState,
  on(actions.gameAdded, (state, action) => adapter.addOne(action.entity, state))
);

export function reducer(state: GameState = initialState, action: Action) {
  return reducerFunction(state, action);
}







