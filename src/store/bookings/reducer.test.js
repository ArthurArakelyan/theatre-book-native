import reducer, {initialState} from "./reducer";
import {GET_BOOKINGS, SUBMIT_BOOKING, ADD_BOOKING} from "./actionTypes";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

it('should return the initial state if nothing is provided', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

describe('should handle GET_BOOKINGS', () => {
  const [start, success, error] = createAsyncActionHelpers(GET_BOOKINGS);

  it('should handle GET_BOOKINGS start', () => {
    const action = start();

    expect(reducer(
      initialState,
      action,
    )).toEqual({ bookings: [], loading: true, error: false });
  });

  it('should handle GET_BOOKINGS success', () => {
    const bookings = [
      {
        _id: 'id',
        theatreId: 'theatreID',
        userId: 'userID',
        userEmail: 'email@mail.loc',
        userName: 'John',
        bookedTheatre: { _id: 'theatreID', name: 'Theatre', image: 'https://github.com/favicon.ico', createdAt: new Date(), date: new Date() },
        isSubmitted: false,
        createdAt: new Date(),
      },
      {
        _id: 'id2',
        theatreId: 'theatreID2',
        userId: 'userID2',
        userEmail: 'email@mail.loc',
        userName: 'John2',
        bookedTheatre: { _id: 'theatreID', name: 'Theatre', image: 'https://github.com/favicon.ico', createdAt: new Date(), date: new Date() },
        isSubmitted: true,
        createdAt: new Date(),
      },
    ];

    const action = success('bookings', bookings);

    expect(reducer(
      initialState,
      action,
    )).toEqual({ bookings, loading: false, error: false });
  });

  it('should handle GET_BOOKINGS error', () => {
    const action = error();

    expect(reducer(
      initialState,
      action,
    )).toEqual({ bookings: [], loading: false, error: true });
  });
});

it('should handle SUBMIT_BOOKING', () => {
  const action = {
    type: SUBMIT_BOOKING,
    payload: 'id',
  };

  const state = {
    bookings: [{
      _id: 'id',
      theatreId: 'theatreID',
      userId: 'userID',
      userEmail: 'email@mail.loc',
      userName: 'John',
      bookedTheatre: { _id: 'theatreID', name: 'Theatre', image: 'https://github.com/favicon.ico', createdAt: new Date(), date: new Date() },
      isSubmitted: false,
      createdAt: new Date(),
    }],
    loading: false,
    error: false,
  };

  expect(reducer(state, action)).toEqual({
    ...state,
    bookings: [{...state.bookings[0], isSubmitted: true}],
  });
});

it('should handle ADD_BOOKING', () => {
  const action = {
    type: ADD_BOOKING,
    payload: {
      _id: 'id',
      theatreId: 'theatreID',
      userId: 'userID',
      userEmail: 'email@mail.loc',
      userName: 'John',
      bookedTheatre: { _id: 'theatreID', name: 'Theatre', image: 'https://github.com/favicon.ico', createdAt: new Date(), date: new Date() },
      isSubmitted: false,
      createdAt: new Date(),
    },
  };

  expect(reducer(initialState, action)).toEqual({
    bookings: [action.payload],
    loading: false,
    error: false,
  });
});
