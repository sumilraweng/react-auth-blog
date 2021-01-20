import { userActionTypes } from "../constant/userAction.types";

const intialState = {
  jwt: "",
  isLogin: undefined,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        jwt: action.payload.jwt,
        isLogin: action.payload.isLogin,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
