import {
  GET_DATA,
  GET_TAGS,
  SET_DISPLAYDATA,
  SET_ACTIVETAG,
  SET_FOCUSITEM,
} from "../constants/actionTypes";


const initialState = {
  data: [],
  tags: [],
  activeTag: '',
  displayData: [],
  focusItem: '',
};


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_DATA:
      return Object.assign({}, state, { data: action.payload });

    case GET_TAGS:
      return Object.assign({}, state, { tags: action.payload });

    case SET_DISPLAYDATA:
      return Object.assign({}, state, { displayData: action.payload });

    case SET_ACTIVETAG:
      return Object.assign({}, state, { activeTag: action.payload });

    case SET_FOCUSITEM:
      return Object.assign({}, state, { focusItem: action.payload })

    default: return state;
  }
}


export default rootReducer;
