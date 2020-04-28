import { GET_DATA, GET_TAGS } from "../constants/actionTypes";


const initialState = {
  data: [],
  tags: [],
  activeTag: '',
  showData: [],
  focusItem: {},
};


function rootReducer(state = initialState, action) {
  if(state === undefined) {
    return initialState;
  }

  const newState = state;

  switch (action.type) {
    case GET_DATA:
      const newData = Object.assign([], state, { data: action.data });
      break;
    case GET_TAGS:
      const newTags = Object.assign([], state, { data: action.tags });
      break;
  }
  return state;
}


export default rootReducer;