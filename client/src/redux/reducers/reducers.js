import {
  GET_DATA,
  SET_ACTIVETAG,
  SET_FOCUSITEM,
  SET_LOADING,
  SET_ITEMIDTOUPDATE,
} from "../constants/actionTypes";


const initialState = {
  data: [],
  activeTag: '',
  focusItem: '',
  loading: true,
  itemIdToUpdate: '',
};


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_DATA:
      return Object.assign({}, state, { data: action.payload });

    case SET_ACTIVETAG:
      return Object.assign({}, state, { activeTag: action.payload });

    case SET_FOCUSITEM:
      return Object.assign({}, state, { focusItem: action.payload })

    case SET_LOADING:
      return Object.assign({}, state, { loading: action.payload })

    case SET_ITEMIDTOUPDATE:
      return Object.assign({}, state, { itemIdToUpdate: action.payload })

    default: return state;
  }
}


export default rootReducer;
