import { PayloadAction } from '@reduxjs/toolkit';

import { IBaseState } from './IBaseState.types';
import { fetchStatusesMap } from './fetchStatusesMap';

export const setError = (state: IBaseState, { payload }: PayloadAction<Error>) => {
  state.error = payload;
  state.status = fetchStatusesMap.rejected;
};
