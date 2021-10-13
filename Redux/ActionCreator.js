import { LoginSuccess, TryLogin, LoginFailed } from "./Actions";
const StartLogin = (dispatch) => (email, password) => {
  var message;
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
    method: "Get",
  })
    .then((response) => response.json)
    .then((data) => {
      let acuser = data.find((x) => x.email == email);
      if (acuser != null) {
        if (email == acuser.email && password == acuser.id) {
          dispatch(Login_Success(acuser));
        } else {
          message = "email or password is false";
          dispatch(Login_Failed(message));
        }
      } else {
        message = "User not found";
        dispatch(Login_Failed(message));
      }
    })
    .catch((err) => alert(err));
};
const Login_Success = (acuser) => {
  return { type: LoginSuccess, payload: acuser };
};
const Try_Login = () => {
  return { type: TryLogin, payload: null };
};
const Login_Failed = (message) => {
  return { type: LoginFailed, payload: message };
};
