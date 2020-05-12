import {
  GET_DATA,
  GET_TAGS,
  SET_DISPLAYDATA,
  SET_ACTIVETAG,
  SET_FOCUSITEM,
  SET_LOADING,
} from '../constants/actionTypes';

export function getData(payload) {
  return { type: GET_DATA, payload };
}

export function getTags(payload) {
  return { type: GET_TAGS, payload };
}

export function setDisplayData(payload) {
  return { type: SET_DISPLAYDATA, payload };
}

export function setActiveTag(payload) {
  return { type: SET_ACTIVETAG, payload };
}

export function setFocusItem(payload) {
  return { type: SET_FOCUSITEM, payload };
}

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}
