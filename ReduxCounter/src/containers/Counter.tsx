import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {State} from '../reducers/counter';
import {increment, decrement} from '../actions/counter';
import Counter from '../components/Counter';

export default function ConnectedCounter() {
  const count = useSelector((state: State) => state.current);
  const dispatch = useDispatch();
  const actions = React.useMemo(() => ({
    increment() {
      dispatch(increment());
    },
    decrement() {
      dispatch(decrement());
    },
  }));
}
