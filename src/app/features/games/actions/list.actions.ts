import { createAction, props } from '@ngrx/store';
import { GameEntity } from '../reducers/list.reducer';

let currentId = 99;

export const gameAdded = createAction(
  '[games] game added',
  ({ title, publisher, platform }: { title: string, publisher: string, platform: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      publisher,
      platform
    } as GameEntity
  })
);