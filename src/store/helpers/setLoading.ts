import { IBaseState } from './IBaseState.types';
import { fetchStatusesMap } from './fetchStatusesMap';

export const setLoading = (state: IBaseState) => {
  state.error = null;
  state.status = fetchStatusesMap.pending;
};
