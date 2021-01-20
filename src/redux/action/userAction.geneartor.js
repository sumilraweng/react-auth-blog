import { userActionTypes } from "../constant/userAction.types";

const userActionObjectGenerator = (actionType, payload = {}) => {
  switch (actionType) {
    case userActionTypes.SIGNUP:
      return {
        type: userActionTypes.SIGNUP,
        payload: payload,
      };
    case userActionTypes.LOGIN:
      return {
        type: userActionTypes.LOGIN,
        payload: payload,
      };

    default:
      return {
        type: "Inavlid Action",
      };
  }
};

export default userActionObjectGenerator;
