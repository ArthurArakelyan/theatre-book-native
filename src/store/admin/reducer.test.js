import reducer from "./reducer";
import {CHANGE_IS_ADMIN} from "./actionTypes";

describe("admin reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toBe(false);
  });

  test("should handle CHANGE_IS_ADMIN", () => {
    const action = { type: CHANGE_IS_ADMIN, payload: true };

    expect(reducer(false, action)).toBe(true);
    expect(reducer(true, {...action, payload: false})).toBe(false);
    expect(reducer(false, {...action, payload: "truthy string"})).toBe(true);
  });
});
