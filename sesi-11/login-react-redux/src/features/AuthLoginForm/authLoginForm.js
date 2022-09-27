import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authLoginAPI } from "../auth/authSlice";

function AuthLoginForm() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginAPI({ email, password }));
    setEmail("");
    setPassword("");
  };
}

return (
  <form name="LoginForm" onSubmit={doSubmit}>
    <div className="form-group-colllection">
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" onChange={emailChange} value={email} />
      </div>

      <div className="form-group">
        <label>password:</label>
        <input
          type="password"
          name="password"
          onChange={passwordChange}
          value={password}
        />
        <input type="submit" value="Login" />
        <div className="message">
          {authState.isLoginPending && (
            <div>
              <img
                src="https://mir-s3-cdn.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                alt="Loading..."
              />
            </div>
          )}
          {authState.isLoginSuccess && <div>Success</div>}
          {authState.errorMessage && <div>{authState.errorMessage}</div>}
        </div>
      </div>
    </div>
  </form>
);

export default AuthLoginForm;
