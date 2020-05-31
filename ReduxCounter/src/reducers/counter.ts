import {create} from 'react-test-renderer';
import {INCREMENT, DECREMENT} from '../constants/counter';
import {Action} from '../actions/counter';

export function createInitialState() {
  return {
    current: 0,
  };
}

export type State = ReturnType<typeof createInitialState>;

export default function reducer(state = createInitialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
