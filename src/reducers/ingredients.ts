import { SET_INGREDIENTS_LIST } from "../actions/ingredients";

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action:any = {}) => {
  switch (action.type) {
    case SET_INGREDIENTS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
