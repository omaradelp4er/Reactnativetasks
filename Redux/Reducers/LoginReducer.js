import { LoginSuccess, TryLogin, LoginFailed } from "../Actions";
const initialstate = {
  user: {},
  isLoggedIn: false,
  tryLogin: false,
  message: "",
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case LoginSuccess: {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        tryLogin: false,
      };
    }
    case TryLogin: {
      return {
        ...state,
        user: action.payload,
        tryLogin: true,
        isLoggedIn: false,
      };
    }
    case LoginFailed: {
      return {
        ...state,
        isLoggedIn: false,
        tryLogin: false,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};
