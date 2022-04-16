import {ADD_THEATRE, GET_THEATRES} from "./actionTypes";

import theatresService from "../../services/theatresService";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

// get

const [startGetTheatres, getTheatresSuccess, getTheatresError] = createAsyncActionHelpers(GET_THEATRES);

export const getTheatres = () => async (dispatch) => {
  try {
    dispatch(startGetTheatres());

    const theatres = await theatresService.getTheatres();

    dispatch(getTheatresSuccess('theatres', theatres));
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
    dispatch(addTheatreAction(theatre));
    return theatre;
  } catch (e) {
    console.error(e);
  }
};
