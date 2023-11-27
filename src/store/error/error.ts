import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type ErrorType = {
  error: string | null;
};

const initialState: ErrorType = {
  error: null,
};

export const error = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers() {},
});

export const { setError } = error.actions;
