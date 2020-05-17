import {
  GET_DATA,
  SET_ACTIVETAG,
  SET_FOCUSITEM,
  SET_LOADING,
  SET_ITEMIDTOUPDATE,
} from '../constants/actionTypes';

export function getData(payload) {
  return { type: GET_DATA, payload };
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

export function setItemIdToUpdate(payload) {
  return { type: SET_ITEMIDTOUPDATE, payload };
}
