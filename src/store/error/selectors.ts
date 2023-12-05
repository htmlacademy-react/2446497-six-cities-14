import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { ErrorType } from './error';

export const getError = createSelector(
  (state: State) => state[NameSpace.Error],
  (state: ErrorType) => state.error
);
