import {ADD_THEATRE, GET_THEATRES} from "./actionTypes";

import theatresService from "../../services/theatresService";

// get

const startGetTheatres = () => {
  return {
    type: GET_THEATRES,
    payload: {
      loading: true,
      error: false,
    }
  };
};

const getTheatresSuccess = (theatres) => {
  return {
    type: GET_THEATRES,
    payload: {
      theatres,
      loading: false,
      error: false,
    }
  };
};

const getTheatresError = () => {
  return {
    type: GET_THEATRES,
    payload: {
      loading: false,
      error: true,
    }
  };
};

export const getTheatres = () => async (dispatch) => {
  try {
    dispatch(startGetTheatres());

    const theatres = await theatresService.getTheatres();

    dispatch(getTheatresSuccess(theatres));
    return theatres;
  } catch(e) {
    dispatch(getTheatresError());
    console.error(e);
  }
};

// add

const addTheatreAction = (theatre) => {
  return {
    type: ADD_THEATRE,
    payload: theatre,
  };
};

export const addTheatre = (name: string, image: string) => async (dispatch) => {
  try {
    const theatre = await theatresService.addTheatre(name, image);
    console.log(theatre);
    dispatch(addTheatreAction(theatre));
    return theatre;
  } catch (e) {
    console.error(e);
  }
};
