import { fetchStatusesMap } from './fetchStatusesMap';

export interface IBaseState {
  error?: Error | null;
  status?: fetchStatusesMap | null;
}
