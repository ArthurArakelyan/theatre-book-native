import {ADD_THEATRE, GET_THEATRES, DELETE_THEATRE} from "./actionTypes";

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
  }
};

// add

const addTheatreAction = (theatre) => {
  return {
    type: ADD_THEATRE,
    payload: theatre,
  };
};

export const addTheatre = (name: string, image: string, date: string) => async (dispatch) => {
  try {
    const theatre = await theatresService.addTheatre(name, image, date);
    dispatch(addTheatreAction(theatre));
    return theatre;
  } catch (e) {
    console.error(e);
  }
};

// delete

const deleteTheatreAction = (id: string) => {
  return {
    type: DELETE_THEATRE,
    payload: id
  };
};

export const deleteTheatre = (id: string) => async (dispatch) => {
  try {
    const deleted = await theatresService.deleteTheatre(id);
    dispatch(deleteTheatreAction(id));
    return deleted;
  } catch (e) {
    console.error(e);
  }
};
