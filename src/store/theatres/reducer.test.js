import reducer, {initialState} from "./reducer";
import {GET_THEATRES, DELETE_THEATRE, ADD_THEATRE} from "./actionTypes";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

describe("theatres reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("should handle GET_THEATRES", () => {
    const [start, success, error] = createAsyncActionHelpers(GET_THEATRES);

    it("should handle GET_THEATRES start", () => {
      const action = start();

      expect(reducer(
        initialState,
        action,
      )).toEqual({ theatres: [], loading: true, error: false });
    });

    it("should handle GET_THEATRES success", () => {
      const theatres = [
        { _id: "id", name: "Theatre", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
        { _id: "id_2", name: "Theatre 2", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
        { _id: "id_3", name: "Theatre 3", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
      ];

      const action = success("theatres", theatres);

      expect(reducer(
        initialState,
        action,
      )).toEqual({ theatres, loading: false, error: false });
    });

    it("should handle GET_THEATRES error", () => {
      const action = error();

      expect(reducer(
        initialState,
        action,
      )).toEqual({ theatres: [], loading: false, error: true });
    });
  });

  test("should handle ADD_THEATRE", () => {
    const newTheatre = {
      _id: "anyID",
      name: "Theatre",
      image: "https://stackoverflow.com/favicon.ico",
      date: new Date(),
      createdAt: new Date(),
    };

    const action = {
      type: ADD_THEATRE,
      payload: newTheatre,
    };

    const state = {
      theatres: [{
        _id: "anyID",
        name: "Test",
        image: "https://github.com/favicon.ico",
        date: new Date(),
        createdAt: new Date(),
      }],
      loading: false,
      error: false,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      theatres: [newTheatre, ...state.theatres],
    });
  });

  test("should handle DELETE_THEATRE", () => {
    const action = {
      type: DELETE_THEATRE,
      payload: "id",
    };

    const state = {
      theatres: [
        { _id: "id", name: "Theatre", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
        { _id: "id_2", name: "Theatre 2", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
        { _id: "id_3", name: "Theatre 3", image: "https://github.com/favicon.ico", date: new Date(), createdAt: new Date() },
      ],
      loading: false,
      error: false,
    };

    expect(reducer(state, action)).toEqual({
      theatres: state.theatres.filter((theatre) => theatre._id !== action.payload),
      loading: false,
      error: false,
    });

    expect(reducer(state, {...action, payload: "unknownID"})).toEqual(state);
  });
});
