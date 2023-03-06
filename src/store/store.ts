import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { StateSchema } from './schema/StateSchema';
import { decrementReducer, decrementSliceName } from './slices';

export function createReduxStore() {
  const rootReducers = {
    [decrementSliceName]: decrementReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    // devTools: __IS_DEV__,
    // middleware: __IS_DEV__ ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) : undefined,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateSchema, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
