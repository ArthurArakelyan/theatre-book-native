import reducer from "./reducer";
import {CHANGE_IS_ADMIN} from "./actionTypes";

it('should return the initial state if nothing is provided', () => {
  expect(reducer(undefined, {})).toBe(false);
});

it('should handle CHANGE_IS_ADMIN when state is initial and payload is true', () => {
  const action = { type: CHANGE_IS_ADMIN, payload: true };

  expect(reducer(false, action)).toBe(true);
});

it('should handle CHANGE_IS_ADMIN when user is admin and payload is false', () => {
  const action = { type: CHANGE_IS_ADMIN, payload: false };

  expect(reducer(true, action)).toBe(false);
});
