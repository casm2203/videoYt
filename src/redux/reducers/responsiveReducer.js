import { UPDATE_RESPONSIVE } from "../actions/responsiveAction";

const initialState = true;

function responsive(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RESPONSIVE:
      return !state;
    default:
      return state;
  }
}

export default responsive;
