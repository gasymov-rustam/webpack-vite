import { createSlice } from '@reduxjs/toolkit';

import { reducers } from '../reducers/reducers';
import { DecrementSchema } from '../types/DecrementSchema';

export const initialState: DecrementSchema = {
  value: 0,
  error: null,
  status: null,
};

export const decrement = createSlice({
  name: 'decrement',
  initialState,
  reducers,
});

export const { actions: decrementActions, reducer: decrementReducer, name: decrementSliceName } = decrement;
