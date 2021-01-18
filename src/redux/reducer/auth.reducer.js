import { userActionTypes } from "../constant/userAction.types";

const intialState = {
  users: [],
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case userActionTypes.SIGNUP:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
      };
    case userActionTypes.LOGIN:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
