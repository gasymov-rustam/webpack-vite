import { AxiosInstance } from 'axios';

import { DecrementSchema } from '../slices';

export interface StateSchema {
  counter: DecrementSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
