import {INCREMENT, DECREMENT} from '../constants/counter';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export type Action =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;
