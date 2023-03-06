import { memo } from 'react';

import { decrementActions, useAppDispatch } from '../../store';

import style from './Decrement.module.scss';

export const Decrement = memo(() => {
  const dispatch = useAppDispatch();

  const handleStateChange = () => {
    dispatch(decrementActions.setDecrementValue(3));
  };

  return (
    <div className={style.block}>
      <button type="button" onClick={handleStateChange}>
        Click
      </button>
    </div>
  );
});
