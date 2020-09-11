import {httpRequest} from "../services";

const URL = "http://localhost:3000/notes";

export const getData = () => async dispatch => {
  const payload = await httpRequest(URL);

  dispatch({type: "LOAD_DATA", payload});
}

export const delItem = id => async dispatch => {
  await httpRequest(`${URL}/${id}`, "DELETE");

  dispatch(getData());
}

export  const createItem = payload => async dispatch => {
  await httpRequest(URL, "POST", payload);

  dispatch(getData());
}

export  const updateItem = (payload, id) => async dispatch => {
  await httpRequest(`${URL}/${id}`, "PUT", payload);

  dispatch(getData());
}

export const setEnglish = () => ({type: "ENG"});

export const setRussian = () => ({type: "RU"});


