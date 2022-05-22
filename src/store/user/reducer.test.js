import reducer from "./reducer";
import {LOGIN, LOGOUT, ADD_EMAIL} from "./actionTypes";

describe("user reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  const user = {
    id: "id",
    name: "John"
  };

  test("should handle LOGIN", () => {
    const action = {
      type: LOGIN,
      payload: user,
    };

    expect(reducer(null, action)).toEqual(action.payload);
    expect(reducer(user, action)).toEqual(action.payload);
  });

  test("should handle LOGOUT", () => {
    const action = { type: LOGOUT };
    expect(reducer(user, action)).toBeNull();
    expect(reducer(null, action)).toBeNull();
  });

  test("should handle ADD_EMAIL", () => {
    const action = { type: ADD_EMAIL, payload: "test@mail.loc" };
    expect(reducer(user, action)).toEqual({...user, email: "test@mail.loc"});
    expect(reducer(null, action)).toBeNull();
  });
});
