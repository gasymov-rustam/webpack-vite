import { PayloadAction } from '@reduxjs/toolkit';

import { DecrementSchema } from '../types/DecrementSchema';

export const reducers = {
  setDecrementValue: (state: DecrementSchema, { payload }: PayloadAction<number>) => {
    state.value -= payload;
  },
};
