import { GET_DATA, GET_TAGS } from '../constants/actionTypes';


export function getData(payload) {
  return { type: GET_DATA, payload };
}

export function getTags(payload) {
  return { type: GET_TAGS, payload };
}
